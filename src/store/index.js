import { configureStore } from '@reduxjs/toolkit';
import { leftPanelSlice } from './leftPanelSlice';
import { mapInfoSlice } from './mapInfoSlice';
import { NFTDetailSlice } from './NFTDetailSlice';
import { rightPanelSlice } from './rightPannel.slice';

export const store = configureStore({
  reducer: {
    map : mapInfoSlice.reducer,
    rightPanel: rightPanelSlice.reducer,
    nftDetail: NFTDetailSlice.reducer,
    leftPanel: leftPanelSlice.reducer,
  },
});