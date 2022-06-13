import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { mapSelector } from './nftSlice'

interface IAppState {
    headerPanelIsOpen: boolean
    rightPanelIsOepn: boolean
    curNft: number | undefined
}
const initialState = {
    headerPanelIsOpen: false,
    rightPanelIsOepn: false,
    curNft: undefined,
}

export const appStateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        openHeaderPanel: (state: IAppState) => {
            state.headerPanelIsOpen = true
        },
        closeHeaderPanel: (state: IAppState) => {
            state.headerPanelIsOpen = false
        },
        openRightPanel: (state: IAppState) => {
            state.rightPanelIsOepn = true
        },
        closeRightPanel: (state: IAppState) => {
            state.rightPanelIsOepn = false
        },
        setCurrentNFT: (state: IAppState, action: PayloadAction<number>) => {
            state.curNft = action.payload
        },
    },
})

export const isHeaderPanelOpenSelector = (state: RootState) =>
    state.appState.headerPanelIsOpen
export const isRightPanelOpenSelector = (state: RootState) =>
    state.appState.rightPanelIsOepn

export const curNftIdSelector = (state: RootState) => state.appState.curNft

export const curNftSelector = (state: RootState) => {
    const allNft = mapSelector(state)
    const curNftId = curNftIdSelector(state)
    return allNft && allNft.find((nft) => nft.id === curNftId)
}

export const {
    openHeaderPanel,
    closeHeaderPanel,
    openRightPanel,
    closeRightPanel,
    setCurrentNFT,
} = appStateSlice.actions
