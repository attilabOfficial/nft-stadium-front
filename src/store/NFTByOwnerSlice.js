import { createSlice } from "@reduxjs/toolkit";
import { mapSelector } from "./mapInfoSlice";

export const NFTByOwnerSlice = createSlice({
  name: 'nftOwn',
  initialState: {
    isOpen: false,
    curOwner: '',
  },
  reducers: {
    openLeftPanel: (state) => {
      state.isOpen = true;
    },
    closeLeftPanel: (state) => {
      state.isOpen = false;
    },
    setCurrentOwner: (state, action) => {
      state.curOwner = '???';
    },
  }
});

export const isLeftPanelOpenSelector = (state) => state.nftOwn.isOpen;
export const currentNftOwnerSlector = (state) => state.nftOwn.curOwner;

export const nftsByOwner = (state, owner) => {
  const allNft = mapSelector(state);
  const curOwner = currentNftOwnerSlector(owner);
  return allNft && allNft.filter((nft) => nft.owner === curOwner);
}

// export const nftOwnByUser = (state) => {
//   const allNft = mapSelector(state);
//   const curOwner = currentNftOwnerSlector(state);
//   return allNft && allNft.filter((nft) => nft.owner === curOwner);
// }

export const { openLeftPanel, closeLeftPanel, setCurrentOwner } = NFTByOwnerSlice.actions;