import { configureStore } from '@reduxjs/toolkit'
import { nftSlice } from './common/store/nftSlice'
import { appStateSlice } from './common/store/appStateSlice'

export const store = configureStore({
    reducer: {
        nfts: nftSlice.reducer,
        appState: appStateSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
