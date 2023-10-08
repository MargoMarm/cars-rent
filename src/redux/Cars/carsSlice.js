import { createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

const initialState = {
  cars: [],
  error: null,
  isLoading: false,
  favorites: [],
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
  reducers: {
    toggleFavorite(state, action) {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter((id) => id !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCars.fulfilled, (state, action) => {
      state.cars = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchCars.rejected, handleRejected);
    builder.addCase(fetchCars.pending, handlePending);
  },
});

export default carsSlice.reducer;
export const { toggleFavorite } = carsSlice.actions;
