import { configureStore } from '@reduxjs/toolkit';
import { NFTByOwnerSlice } from './feature/NFTByOwner/store/NFTByOwnerSlice';
import { nftSlice } from './common/store/nftSlice';
import { NFTDetailSlice } from './feature/NFTDetail/store/NFTDetailSlice';

export const store = configureStore({
  reducer: {
    map : nftSlice.reducer,
    nftDetail: NFTDetailSlice.reducer,
    nftOwn: NFTByOwnerSlice.reducer,
  },
});