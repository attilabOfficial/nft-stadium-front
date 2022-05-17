import { createSlice } from "@reduxjs/toolkit";

export const leftPanelSlice = createSlice({
  name: 'leftPanel',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openLeftPanel: (state) => {
      state.isOpen = true;
    },
    closeLeftPanel: (state) => {
      state.isOpen = false;
    },
  }
});

export const { openLeftPanel, closeLeftPanel } = leftPanelSlice.actions;