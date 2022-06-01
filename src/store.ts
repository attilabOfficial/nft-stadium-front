import { configureStore } from '@reduxjs/toolkit'
import { nftSlice } from './common/store/nftSlice'
import { appStateSlice } from './common/store/appStateSlice'
import { cmsSlice } from './feature/cms/store/cmsSlice'

export const store = configureStore({
    reducer: {
        nfts: nftSlice.reducer,
        appState: appStateSlice.reducer,
        cmsState: cmsSlice.reducer,
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
