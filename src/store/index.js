import { configureStore } from '@reduxjs/toolkit';
import { NFTByOwnerSlice } from './NFTByOwnerSlice';
import { mapInfoSlice } from './mapInfoSlice';
import { NFTDetailSlice } from './NFTDetailSlice';

export const store = configureStore({
  reducer: {
    map : mapInfoSlice.reducer,
    nftDetail: NFTDetailSlice.reducer,
    nftOwn: NFTByOwnerSlice.reducer,
  },
});