import { configureStore } from '@reduxjs/toolkit'
import { mapInfoSlice } from './mapInfoSlice';

export default configureStore({
  reducer: {
    web3Config : mapInfoSlice.reducer
  }
})