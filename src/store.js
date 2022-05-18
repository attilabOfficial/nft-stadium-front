import { configureStore } from '@reduxjs/toolkit';
import { NFTByOwnerSlice } from './feature/NFTByOwner/store/NFTByOwnerSlice';
import { mapInfoSlice } from './common/store/mapInfoSlice';
import { NFTDetailSlice } from './feature/NFTDetail/store/NFTDetailSlice';

export const store = configureStore({
  reducer: {
    map : mapInfoSlice.reducer,
    nftDetail: NFTDetailSlice.reducer,
    nftOwn: NFTByOwnerSlice.reducer,
  },
});