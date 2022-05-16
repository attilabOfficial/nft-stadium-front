import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    curNft: undefined,
    owner : undefined
};

export const getOwner = createAsyncThunk(
    'web3/connect',
    async (contract, nftId, thunkAPI) => {
        const owner = await contract.ownerOf(nftId);
        return owner;
    }
  )

export const changeImg = createAsyncThunk(
    'web3/connect',
    async (contract, newUrl, thunkAPI) => {
        const owner = await contract.changeImg(newUrl);
        return owner;
    }
  )

export const NFTDetailSlice = createSlice({
    name: 'nftDetailState',
    initialState,
    reducers: {
        setCurrentNFT: (state, action) => {
            state.curNft = action.payload; 
          },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getOwner.fulfilled, (state, action) => {
            state.owner = action.payload;
        })
      },
});

export const curNftSelector = (state) => state.nftDetail.curNft;
export const curNftOwnerSelector = (state) => state.nftDetail.owner;

export const { setCurrentNFT } = NFTDetailSlice.actions