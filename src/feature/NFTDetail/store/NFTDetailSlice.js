import { createSlice } from "@reduxjs/toolkit";


export const NFTDetailSlice = createSlice({
  name: 'nftDetail',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openRightPanel: (state) => {
      state.isOpen = true;
    },
    closeRightPanel: (state) => {
      state.isOpen = false;
    },
  },
});

export const isRightPanelOpenSelector = (state) => state.nftDetail.isOpen;

export const { openRightPanel, closeRightPanel } = NFTDetailSlice.actions;
