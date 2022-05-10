import { configureStore } from "@reduxjs/toolkit";
import rightPanelSliceReducer from "../features/rightPannel/rightPannel.slice";

export default configureStore({
  reducer: {
    rightPanel: rightPanelSliceReducer,
  },
})