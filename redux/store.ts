import { configureStore, } from "@reduxjs/toolkit";
import globalReducers  from "./globalReducers";
import globalServices from './globalServices';

export const store = configureStore({
  reducer: globalReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalServices),
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

