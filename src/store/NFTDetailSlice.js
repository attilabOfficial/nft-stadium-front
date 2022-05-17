import { createSlice } from "@reduxjs/toolkit";
import { mapSelector } from './mapInfoSlice';

export const NFTDetailSlice = createSlice({
  name: 'nftDetail',
  initialState: {
    isOpen: false,
    curNft : 0
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
  }
});
export const curNftIdSelector = (state) => state.nftDetail.curNft;
export const isRightPanelOpenSelector = (state) => state.nftDetail.isOpen;

export const curNftSelector = (state) => {
    const allNft = mapSelector(state);
    const curNftId = curNftIdSelector(state);
    return allNft && allNft.find((nft)=>nft.id ===curNftId)
}




export const { openRightPanel, closeRightPanel, setCurrentNFT } = NFTDetailSlice.actions;
