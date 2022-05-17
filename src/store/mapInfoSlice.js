import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {utils} from "ethers"

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

export const mint = createAsyncThunk(
    'web3/mint',
    async ({contract, to, id}, thunkAPI) => {
        try{
            await contract.mint(to,id, {value: utils.parseEther("0.01")} );
            console.log("ok")
        }catch(ex){
            console.log("error")
            console.log(ex)
        }
       
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
            const linkMap = mapTupple[1];
            const imgMap = mapTupple[2];
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


export const { mockData, nftImgMap } = mapInfoSlice.actions;
