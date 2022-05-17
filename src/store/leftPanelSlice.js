import { createSlice } from "@reduxjs/toolkit";

export const leftPanelSlice = createSlice({
  name: 'leftPanel',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openLeftPanel: (state) => {
      state.isOpen = true;
      console.log('click open');
    },
    closeLeftPanel: (state) => {
      state.isOpen = false;
      console.log('click close');
    },
  }
});

export const { openLeftPanel, closeLeftPanel } = leftPanelSlice.actions;