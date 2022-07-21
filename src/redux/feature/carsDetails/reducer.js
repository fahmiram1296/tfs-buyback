import { createReducer } from "@reduxjs/toolkit";
import { setSelectedCars } from "./action";

export const initialState = {
  selectedCars: {},
};

const carsReducer = createReducer(initialState, (builder) => {
  builder.addCase(setSelectedCars, (state, { payload }) => {
    state.selectedCars = payload;
  });
});

export default carsReducer;
