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
        mockData: (state) => {
            state.imgMap = ["mock", "mock"]; // ajouter ici une fonction qui génére automatiquement les données
          },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAllMapInfo.fulfilled, (state, action) => {
            state.imgMap = action.payload;
        })
      },
});
export const mapSelector = (state) => state.imgMap;


// Action creators are generated for each case reducer function
export const { mockData } = mapInfoSlice.actions
