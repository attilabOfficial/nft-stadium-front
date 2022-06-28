import { store } from '../../../store'
import { openRightPanel } from '../appStateSlice'

// Exemple de test d'action
test('OpenRightPannel', () => {
    const myStore = store
    myStore.dispatch(openRightPanel())
    expect(myStore.getState().appState.rightPanelIsOepn).toBe(true)
})
