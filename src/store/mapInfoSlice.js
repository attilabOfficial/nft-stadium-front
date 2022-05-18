import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {TOTAL_CELLS} from '../properties/gridProperties';

const initialState = {
    loading: "idle",
    mapInfo: [],
};

export const getAllMapInfo = createAsyncThunk(
    'web3/connect',
    async (contract, thunkAPI) => {
        const stadium = await contract.getStadium();
        return stadium;
    }
)



export const mapInfoSlice = createSlice({
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
        }
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
            const ownerMap = mapTupple[0];
            const imgMap = mapTupple[1];
            const linkMap = mapTupple[2];
            const allData = ownerMap.map((owner, index)=>(
                {
                    id : index,
                    owner,
                    img: imgMap[index],
                    link: linkMap[index]
                }
            ))
            state.mapInfo = allData;
            state.loading = 'idle';

        })
    },
});
export const mapSelector = (state) => state.map.mapInfo;
export const isMapLoading = (state) => state.map.loading;


export const { mockData, nftImgMap, updateAddressNFT , updateAddressImg} = mapInfoSlice.actions;
