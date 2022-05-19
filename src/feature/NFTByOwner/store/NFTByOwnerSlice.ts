import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";

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
      state.curOwner = action.payload;
    },
  }
});

export const isLeftPanelOpenSelector = (state: RootState) => state.nftOwn.isOpen;
export const currentNftOwnerSlector = (state: RootState) => state.nftOwn.curOwner;

export const { openLeftPanel, closeLeftPanel, setCurrentOwner } = NFTByOwnerSlice.actions;