import { combineReducers } from "@reduxjs/toolkit";
import carsReducer from "./feature/carsDetails/reducer";
import { carsApiReducer } from "./feature/carsDetails/service";

/** you can initiate all reducer in here */
const globalReducers = combineReducers({
  ...carsApiReducer,
  carsReducer,
});

export default globalReducers;
