import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'

import { REACT_APP_MOCK, REACT_APP_TOTAL_CELLS } from '../../const'
import { Contract, utils } from 'ethers'
import { RootState } from '../../store'

import toast from 'react-hot-toast'
import { ErrorComponent } from '../components/web3/DappContainer'

export interface INFT {
    id: number
    owner: string
    img: string
    link: string
}

interface INFTSlice {
    transactionLoading: 'idle' | 'loading'
    loading: 'idle' | 'loading'
    nftList: Array<INFT>
}

export const initialState: INFTSlice = {
    loading: 'idle',
    nftList: [],
    transactionLoading: 'idle',
}

const mintError = ErrorComponent({ message: 'app.toaster.mintFailed' })
const changeImageError = ErrorComponent({
    message: 'app.toaster.changeImageFailed',
})

const generateMockMap = () => {
    const data: Array<Array<string>> = [[], [], []]
    for (let c = 0; c <= REACT_APP_TOTAL_CELLS - 1; c++) {
        data[0][c] = `owner_${c}`
        data[1][c] = `https://picsum.photos/id/${c}/200`
        data[2][c] = `link${c}`
    }
    return data
}

export const getAllMapInfo = createAsyncThunk(
    'web3/connect',
    async (contract?: Contract) => {
        if (REACT_APP_MOCK) {
            return generateMockMap()
        } else if (contract) {
            const stadium = await contract.getStadium()
            return stadium
        }
    }
)

export const transformToNFT = (data: Array<Array<string>>) => {
    const ownerMap: Array<string> = data[0]
    const imgMap: Array<string> = data[1]
    const linkMap: Array<string> = data[2]
    const transformed =
        ownerMap &&
        ownerMap.map((owner, index) => {
            const NFT: INFT = {
                id: index,
                owner,
                img: imgMap[index],
                link: linkMap[index],
            }
            return NFT
        })
    return transformed || []
}

export const mint = createAsyncThunk(
    'web3/mint',
    async (
        { contract, to, id }: { contract: Contract; to: string; id: number },
        { rejectWithValue }
    ) => {
        try {
            const response = await contract.mint(to, id, {
                value: utils.parseEther('0.01'),
            })
            const receipt = await response.wait()
            console.log(receipt)
            return 'receipt.events'
        } catch (ex) {
            return rejectWithValue(ex)
        }
    }
)
export const changeImg = createAsyncThunk(
    'web3/changeImg',
    async (
        { contract, url, id }: { contract: Contract; url: string; id: number },
        { rejectWithValue }
    ) => {
        try {
            const response = await contract.changeImg(id, url)
            const receipt = await response.wait()
            console.log(receipt)
            return 'ok'
        } catch (ex) {
            return rejectWithValue(ex)
        }
    }
)

export const nftSlice = createSlice({
    name: 'nftState',
    initialState,
    reducers: {
        updateAddressNFT: (
            state: INFTSlice,
            action: PayloadAction<{ id: number; address: string }>
        ) => {
            const { id, address } = action.payload
            const nftIndex = state.nftList.findIndex((elem) => elem.id === id)
            state.nftList[nftIndex] = { id, owner: address, img: '', link: '' }
        },
        updateAddressImg: (
            state: INFTSlice,
            action: PayloadAction<{ id: number; url: string }>
        ) => {
            const { id, url } = action.payload
            const nftIndex = state.nftList.findIndex((elem) => elem.id === id)
            state.nftList[nftIndex].img = url
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllMapInfo.pending, (state) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })

        builder.addCase(getAllMapInfo.fulfilled, (state, action) => {
            let mapTupple = action.payload
            const ownerMap: Array<string> = mapTupple[0]
            const imgMap: Array<string> = mapTupple[1]
            const linkMap: Array<string> = mapTupple[2]
            const allData = ownerMap.map((owner, index) => {
                const NFT: INFT = {
                    id: index,
                    owner,
                    img: imgMap[index],
                    link: linkMap[index],
                }
                return NFT
            })
            state.nftList = allData
            state.loading = 'idle'
        })
        builder.addCase(mint.pending, (state) => {
            if (state.transactionLoading === 'idle') {
                state.transactionLoading = 'loading'
            }
        })

        builder.addCase(mint.fulfilled, (state, action) => {
            state.transactionLoading = 'idle'
        })
        builder.addCase(mint.rejected, (state) => {
            toast.error(mintError)
            state.transactionLoading = 'idle'
        })
        builder.addCase(changeImg.pending, (state) => {
            if (state.transactionLoading === 'idle') {
                state.transactionLoading = 'loading'
            }
        })
        builder.addCase(changeImg.fulfilled, (state, action) => {
            state.transactionLoading = 'idle'
        })
        builder.addCase(changeImg.rejected, (state) => {
            toast.error(changeImageError)
            state.transactionLoading = 'idle'
        })
    },
})
export const mapSelector = (state: RootState) => state.nfts.nftList
export const isMapLoadingSelector = (state: RootState) => state.nfts.loading

export const nftsByOwnerSelector = (state: RootState, curOwner: string) => {
    const allNft = mapSelector(state)
    return (
        allNft && allNft.filter((nft) => nft.owner.toLowerCase() === curOwner)
    )
}

export const isNFTDetailLoading = (state: RootState) =>
    state.nfts.transactionLoading

export const { updateAddressNFT, updateAddressImg } = nftSlice.actions
