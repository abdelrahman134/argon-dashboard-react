import { configureStore } from "@reduxjs/toolkit";
import {  persistReducer } from "redux-persist";
import modeSlice from "./slices/mode.slice";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
const persistConfig = {
  key: "root",
  storage,
};
const persistedModeSlice = persistReducer(persistConfig, modeSlice);

export const store = configureStore({
  reducer: {
    theme: persistedModeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
}); 