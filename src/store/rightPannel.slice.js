import { createSlice } from "@reduxjs/toolkit";

export const rightPanelSlice = createSlice({
  name: 'rightPanel',
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
  }
});

export const { openRightPanel, closeRightPanel } = rightPanelSlice.actions;
