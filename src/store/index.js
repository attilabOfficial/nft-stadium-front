import { configureStore } from '@reduxjs/toolkit'
import { mapInfoSlice } from './mapInfoSlice';
import { rightPanelSlice } from './rightPannel.slice';

export default configureStore({
  reducer: {
    web3Config : mapInfoSlice.reducer,
    rightPanel: rightPanelSlice.reducer,
  }
})