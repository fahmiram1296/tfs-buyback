import { combineReducers } from "@reduxjs/toolkit";
import carsReducer from "./features/cars/reducer";
import { carsApiReducer } from "./features/cars/service";

/** you can initiate all reducer in here */
const globalReducers = combineReducers({
  ...carsApiReducer,
  carsReducer,
});

export default globalReducers;
