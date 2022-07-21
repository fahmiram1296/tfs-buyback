import { configureStore } from "@reduxjs/toolkit";
import globalReducers from "./globalReducer";
import globalServices from "./globalServices";

export const store = configureStore({
  reducer: globalReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalServices),
});
