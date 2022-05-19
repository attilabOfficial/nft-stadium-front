import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { TOTAL_CELLS } from '../../const';
import {Contract, utils} from "ethers"
import { RootState } from '../../store';



export interface INFT { 
    id: number,
    owner : string,
    img: string,
    link : string
}

interface INFTSlice {
    transactionLoading : "idle" | "loading",
    loading: "idle" | "loading",
    curNft : number,
    mapInfo : Array<INFT>
}

const initialState:INFTSlice = {
    loading: "idle",
    mapInfo: [],
    curNft : 0,
    transactionLoading:'idle'
};

export const getAllMapInfo = createAsyncThunk(
    'web3/connect',
    async (contract: Contract) => {
        const stadium = await contract.getStadium();
        return stadium;
    }
)

export const mint = createAsyncThunk(
    'web3/mint',
    async ({contract, to, id} :{ contract : Contract, to : string, id : number}, { rejectWithValue }) => {
        try{
            const response  = await contract.mint(to, id, {value: utils.parseEther("0.01")} );
            const receipt = await response.wait()
            console.log(receipt)
            return "receipt.events";
  
        }catch(ex){
          return rejectWithValue(ex)
        }
       
    }
  )
  export const changeImg = createAsyncThunk(
    'web3/changeImg',
    async ({contract, url, id} : { contract : Contract, url : string, id : number}, { rejectWithValue }) => {
        try{
          const response =await contract.changeImg(id, url );
          const receipt = await response.wait()
          console.log(receipt)
          return "ok";
        }catch(ex){
            return rejectWithValue(ex)
        }
       
    }
  )



export const nftSlice = createSlice({
    name: 'mapInfoState',
    initialState,
    reducers: {
        mockData: (state) => {
            if (state.mapInfo.length === 0) {
                state.mapInfo = []
                for (let c = 0; c <= TOTAL_CELLS - 1; c++) {
                    state.mapInfo.push(
                        {
                            id: c,
                            owner : "mock_id",
                            img: `https://picsum.photos/id/${c}/200`,
                            link : 'test'
                        }
                    );
                };
            };
        },
        updateAddressNFT : (state, action)=>{
            const {id , address} = action.payload;
            const nftIndex = state.mapInfo.findIndex((elem)=>elem.id === id);
            state.mapInfo[nftIndex] = { id, owner: address, img:'', link:''}
        },
        updateAddressImg : (state, action)=>{
            const {id , url} = action.payload;
            const nftIndex = state.mapInfo.findIndex((elem)=>elem.id === id);
            state.mapInfo[nftIndex].img = url
        },
        setCurrentNFT: (state, action) => {
            state.curNft = action.payload; 
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMapInfo.pending, (state) => {
                if (state.loading === 'idle') {
                    state.loading = 'loading';
                }
            })

        builder.addCase(getAllMapInfo.fulfilled, (state, action) => {
            let mapTupple = action.payload;
            const ownerMap: Array<string> = mapTupple[0];
            const imgMap :Array<string> = mapTupple[1];
            const linkMap:Array<string> = mapTupple[2];
            const allData = ownerMap.map((owner, index)=>{
                const NFT : INFT = 
                    {
                        id : index,
                        owner,
                        img: imgMap[index],
                        link: linkMap[index]
                    }
                return NFT;
            }   
            )
            state.mapInfo = allData;
            state.loading = 'idle';
        })
        builder
            .addCase(mint.pending, (state) => {
                if (state.transactionLoading === 'idle') {
                    state.transactionLoading = 'loading';
                }
            })

        builder.addCase(mint.fulfilled, (state, action) => {
            state.transactionLoading = 'idle';
        })
        builder.addCase(mint.rejected, (state) => {
            state.transactionLoading = 'idle';
        })
        builder
        .addCase(changeImg.pending, (state) => {
            if (state.transactionLoading === 'idle') {
                state.transactionLoading = 'loading';
            }
        })
        builder.addCase(changeImg.fulfilled, (state, action) => {
            state.transactionLoading = 'idle';
        })
        builder.addCase(changeImg.rejected, (state) => {
            state.transactionLoading = 'idle';
        })
    },
});
export const mapSelector = (state: RootState) => state.map.mapInfo;
export const isMapLoadingSelector = (state: RootState) => state.map.loading;

export const curNftIdSelector = (state: RootState) => state.map.curNft;

export const curNftSelector = (state: RootState) => {
    const allNft = mapSelector(state);
    const curNftId = curNftIdSelector(state);
    return allNft && allNft.find((nft)=>nft.id === curNftId)
}

export const nftsByOwnerSelector = (state: RootState, curOwner: string ) => {
    const allNft = mapSelector(state);
    return allNft && allNft.filter((nft) => nft.owner.toLowerCase() === curOwner);
}

export const isNFTDetailLoading = (state: RootState) => state.map.transactionLoading;

export const { mockData, updateAddressNFT , updateAddressImg, setCurrentNFT} = nftSlice.actions;
