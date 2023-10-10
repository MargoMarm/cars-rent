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
  },
});

export const { setFilter } = FilterSlice.actions;
export default FilterSlice.reducer;
