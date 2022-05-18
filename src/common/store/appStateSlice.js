import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  leftPanelIsOpen: false,
  rightPanelIsOepn: false,
};

export const appStateSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    openLeftPanel: (state) => {
      state.leftPanelIsOpen = true;
    },
    closeLeftPanel: (state) => {
      state.leftPanelIsOpen = false;
    },
    openRightPanel: (state) => {
      state.rightPanelIsOepn = true;
    },
    closeRightPanel: (state) => {
      state.rightPanelIsOepn = false;
    },
  }
});

export const isLeftPanelOpenSelector = (state) => state.appState.leftPanelIsOpen;
export const isRightPanelOpenSelector = (state) => state.appState.rightPanelIsOepn;

export const {
  openLeftPanel,
  closeLeftPanel,
  openRightPanel,
  closeRightPanel
} = appStateSlice.actions;