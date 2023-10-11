import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
  name: "filter",
  initialState: {
    filter: {
      brand: "",
      price: "",
      mileageRange: { min: "", max: "" },
    },
  },
  reducers: {
    setFilter(state, action) {
      state.filter[action.payload.filter] = action.payload.value;
    },
    resetFilter(state, action) {
      state.filter.brand = "";
      state.filter.price = "";
      state.filter.mileageRange.max = "";
      state.filter.mileageRange.min = "";
    },
  },
});

export const { setFilter, resetFilter } = FilterSlice.actions;
export default FilterSlice.reducer;
