import { configureStore } from '@reduxjs/toolkit';
import { mapInfoSlice } from './mapInfoSlice';
import { NFTDetailSlice } from './NFTDetailSlice';
import { rightPanelSlice } from './rightPannel.slice';

export const store = configureStore({
  reducer: {
    web3Config : mapInfoSlice.reducer,
    rightPanel: rightPanelSlice.reducer,
    nftDetail: NFTDetailSlice.reducer,
  },
});