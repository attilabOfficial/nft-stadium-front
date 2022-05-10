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
  }
});

export const { openRightPanel } = rightPanelSlice.actions;

export default rightPanelSlice.reducer;