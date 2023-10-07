import { configureStore } from "@reduxjs/toolkit";
import carsReducer from "./Cars/carsSlice";


export const store = configureStore({
  reducer: { cars: carsReducer },
});
