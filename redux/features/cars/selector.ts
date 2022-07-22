import { AppState } from "../../store";

export const selectedCars = (state: AppState) => state.carsReducer.setSelectedCars;
