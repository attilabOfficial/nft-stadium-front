import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../../store";


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

export const isRightPanelOpenSelector = (state: RootState) => state.nftDetail.isOpen;

export const { openRightPanel, closeRightPanel } = NFTDetailSlice.actions;
