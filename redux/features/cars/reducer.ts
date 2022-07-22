import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { setSelectedCars } from "./action";

export const initialState = {
  setSelectedCars: {},
};

const carsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSelectedCars, (state, action: PayloadAction<object>) => {
        state.setSelectedCars = action.payload;
    });
});

export default carsReducer;
