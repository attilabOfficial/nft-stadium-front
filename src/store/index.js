import { configureStore } from '@reduxjs/toolkit';
import { mapInfoSlice } from './mapInfoSlice';
import { NFTDetailSlice } from './NFTDetailSlice';

export const store = configureStore({
  reducer: {
    map : mapInfoSlice.reducer,
    nftDetail: NFTDetailSlice.reducer,
  },
});