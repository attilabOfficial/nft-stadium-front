import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store'
import { mapSelector } from './nftSlice'

const initialState = {
    leftPanelIsOpen: false,
    rightPanelIsOepn: false,
    curNft: 0,
}

export const appStateSlice = createSlice({
    name: 'appState',
    initialState,
    reducers: {
        openLeftPanel: (state) => {
            state.leftPanelIsOpen = true
        },
        closeLeftPanel: (state) => {
            state.leftPanelIsOpen = false
        },
        openRightPanel: (state) => {
            state.rightPanelIsOepn = true
        },
        closeRightPanel: (state) => {
            state.rightPanelIsOepn = false
        },
        setCurrentNFT: (state, action) => {
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
