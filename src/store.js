import { configureStore } from '@reduxjs/toolkit';
import { nftSlice } from './common/store/nftSlice';
import { appStateSlice } from './common/store/appStateSlice';

export const store = configureStore({
  reducer: {
    appState: appStateSlice.reducer,
    map: nftSlice.reducer,
  },
});