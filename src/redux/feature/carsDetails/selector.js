/**
 * get data from reducers
 */

import { createSelector } from "reselect";
import { initialState } from "./reducer";

const selectInitialState = (state) => state.carsReducer || initialState;

export const selectedCar = () =>
  createSelector(selectInitialState, (state) => state.selectedCar);
