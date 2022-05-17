import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { mapSelector } from './mapInfoSlice';
import {utils} from "ethers"


export const mint = createAsyncThunk(
  'web3/mint',
  async ({contract, to, id}, { rejectWithValue }) => {
      try{
          const response =await contract.mint(to,id, {value: utils.parseEther("0.01")} );
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
  async ({contract, url, id}, { rejectWithValue }) => {
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
export const NFTDetailSlice = createSlice({
  name: 'nftDetail',
  initialState: {
    isOpen: false,
    curNft : 0,
    loading:'idle'
  },
  reducers: {
    openRightPanel: (state) => {
      state.isOpen = true;
    },
    closeRightPanel: (state) => {
      state.isOpen = false;
    },
    setCurrentNFT: (state, action) => {
      state.curNft = action.payload; 
    },
  },
  extraReducers: (builder) => {
    builder
        .addCase(mint.pending, (state) => {
            if (state.loading === 'idle') {
                state.loading = 'loading';
            }
        })

    builder.addCase(mint.fulfilled, (state, action) => {
        state.loading = 'idle';
    })
    builder
    .addCase(changeImg.pending, (state) => {
        if (state.loading === 'idle') {
            state.loading = 'loading';
        }
    })
    builder.addCase(changeImg.fulfilled, (state, action) => {
        state.loading = 'idle';
    })
},
});
export const curNftIdSelector = (state) => state.nftDetail.curNft;
export const isRightPanelOpenSelector = (state) => state.nftDetail.isOpen;

export const curNftSelector = (state) => {
    const allNft = mapSelector(state);
    const curNftId = curNftIdSelector(state);
    return allNft && allNft.find((nft)=>nft.id ===curNftId)
}


export const isNFTDetailLoading = (state) => state.nftDetail.loading;


export const { openRightPanel, closeRightPanel, setCurrentNFT } = NFTDetailSlice.actions;
