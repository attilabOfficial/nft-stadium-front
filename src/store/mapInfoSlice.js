import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
    imgMap: undefined,
};

export const getAllMapInfo = createAsyncThunk(
    'web3/connect',
    async (contract, thunkAPI) => {
        const stadium = await contract.getStadium();
        return stadium;
    }
  )

export const mapInfoSlice = createSlice({
    name: 'mapInfotate',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAllMapInfo.fulfilled, (state, action) => {
            state.imgMap = action.payload;
        })
      },
});
export const mapSelector = (state) => state.imgMap;


export const mapInfotateActions = mapInfoSlice.actions;