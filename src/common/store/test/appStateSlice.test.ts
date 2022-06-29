import { RootState, store } from '../../../store'
import { blueTheme, ITheme } from '../../../themes'
import {
    closeHeaderPanel,
    openHeaderPanel,
    openRightPanel,
    setCurrentNFT,
    setCurrentTheme,
} from '../appStateSlice'
import { MOCKED_STORE } from './mockedStore'
import { curThemeSelector } from '../appStateSlice'

// clickOnCell tests
test('OpenRightPannel', () => {
    const myStore = store
    myStore.dispatch(openRightPanel())
    expect(myStore.getState().appState.rightPanelIsOepn).toBe(true)
})

test('setCurrentNFT', () => {
    const myStore = store
    myStore.dispatch(setCurrentNFT(3))
    expect(myStore.getState().appState.curNft).toBe(3)
})

// clickOnWallet tests
test('OpenHeaderPanel', () => {
    const myStore = store
    myStore.dispatch(openHeaderPanel())
    expect(myStore.getState().appState.headerPanelIsOpen).toBe(true)
})

test('CloseHeaderPanel', () => {
    const myStore = store
    myStore.dispatch(closeHeaderPanel())
    expect(myStore.getState().appState.headerPanelIsOpen).toBe(false)
})

// themes test (Dont know wich on to choose)
test('setCurrentTheme', () => {
    let myState: RootState = { ...MOCKED_STORE }
    myState.appState.curTheme = blueTheme

    expect(curThemeSelector(myState)).toMatchObject(blueTheme)
})

test('setCurrentTheme2', () => {
    const myStore = store
    myStore.dispatch(setCurrentTheme(blueTheme))
    expect(myStore.getState().appState.curTheme).toBe(blueTheme)
})
