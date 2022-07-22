import { createSelector } from "@reduxjs/toolkit";
import { AppState } from "../../store";
import { initialState } from "./reducer";

const selectInitialState = (state: AppState) =>
  state.carsReducer || initialState;

export const selectedVinNumber = createSelector(
  selectInitialState,
  (state) => state.vinNumber
);
