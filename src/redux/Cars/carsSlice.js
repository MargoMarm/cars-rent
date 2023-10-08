import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: [],
  error: null,
  isLoading: false,
};

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const carsSlice = createSlice({
  name: "cars",
  initialState,

  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
      console.log(state.cars);
    });
    builder.addCase(fetchCars.rejected, handleRejected);
    builder.addCase(fetchCars.pending, handlePending);
  },
});

export default carsSlice.reducer;
