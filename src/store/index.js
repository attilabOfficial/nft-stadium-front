import { configureStore } from '@reduxjs/toolkit';
import { leftPanelSlice } from './leftPanelSlice';
import { mapInfoSlice } from './mapInfoSlice';
import { NFTDetailSlice } from './NFTDetailSlice';

export const store = configureStore({
  reducer: {
    map : mapInfoSlice.reducer,
    nftDetail: NFTDetailSlice.reducer,
    leftPanel: leftPanelSlice.reducer,
  },
});