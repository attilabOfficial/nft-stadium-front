import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { mapSelector } from './nftSlice'

interface IAppState {
    leftPanelIsOpen: boolean
    rightPanelIsOepn: boolean
    curNft: number | undefined
}
const initialState = {
    leftPanelIsOpen: false,
    rightPanelIsOepn: false,
    curNft: undefined,
}

export const appStateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        openLeftPanel: (state: IAppState) => {
            state.leftPanelIsOpen = true
        },
        closeLeftPanel: (state: IAppState) => {
            state.leftPanelIsOpen = false
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

export const isLeftPanelOpenSelector = (state: RootState) =>
    state.appState.leftPanelIsOpen
export const isRightPanelOpenSelector = (state: RootState) =>
    state.appState.rightPanelIsOepn

export const curNftIdSelector = (state: RootState) => state.appState.curNft

export const curNftSelector = (state: RootState) => {
    const allNft = mapSelector(state)
    const curNftId = curNftIdSelector(state)
    return allNft && allNft.find((nft) => nft.id === curNftId)
}

export const {
    openLeftPanel,
    closeLeftPanel,
    openRightPanel,
    closeRightPanel,
    setCurrentNFT,
} = appStateSlice.actions
