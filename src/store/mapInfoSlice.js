import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import {TOTAL_CELLS} from '../properties/gridProperties';

const initialState = {
    loading: 'idle',
    imgMap: [],
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
            if (state.imgMap.length === 0) {
                state.imgMap = [[], []]
                for (let c = 0; c <= TOTAL_CELLS - 1; c++) {
                    const id = c;
                    state.imgMap[0].push(`https://picsum.photos/id/${id}/200`);
                };
            };
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllMapInfo.pending, (state) => {
                if (state.loading === 'idle') {
                    state.loading = 'loading';
                }
            })
            .addCase(getAllMapInfo.fulfilled, (state, action) => {
                let imageTable = action.payload;
                let newImageArray = [];
                // Complete the array with empty cells 
                if(imageTable.length < TOTAL_CELLS){ 
                    const emptyArray = Array.apply(null, Array(TOTAL_CELLS - imageTable[0].length)).map( ()=>({}) )
                    newImageArray = [...imageTable[0], ...emptyArray];
                }else{
                    newImageArray = imageTable[0];
                }
                state.imgMap = [newImageArray,imageTable[1] ];
                state.loading = 'idle';
            })
    },
});
export const mapSelector = (state) => state.map.imgMap;
export const isMapLoading = (state) => state.map.loading;


export const { mockData, nftImgMap } = mapInfoSlice.actions;
