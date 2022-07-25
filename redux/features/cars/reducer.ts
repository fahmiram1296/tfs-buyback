import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { setVinNumber } from "./action";

export const initialState = {
  vinNumber: '',
};

const carsReducer = createReducer(initialState, (builder) => {
  builder.addCase(setVinNumber, (state, action: PayloadAction<string>) => {
    state.vinNumber = action.payload;
  });
});

export default carsReducer;
