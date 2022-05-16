import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


const initialState = {
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
            const columnsNbr = 25;
            const rowsNbr = 17;
            const cellsTotal = columnsNbr * rowsNbr;

            if (state.imgMap.length === 0) {
                for (let c = 0; c <= cellsTotal - 1; c++) {
                    const id = c;
                    state.imgMap.push(`https://picsum.photos/id/${id}/200`);
                };
            };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getAllMapInfo.fulfilled, (state, action) => {
            state.imgMap = action.payload;
        })
      },
});
export const mapSelector = (state) => state.imgMap;

export const { mockData } = mapInfoSlice.actions;
