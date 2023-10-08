import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.cars;

export const selectError = (state) => state.cars.error;

export const selectIsLoading = (state) => state.cars.isLoading;

export const selectFavoritesId = (state) => state.cars.favorites;

export const selectFavorites = createSelector(
  [selectCars, selectFavoritesId],
  (cars, ids) => {
    const favCars = cars.filter((car) => ids.includes(car.id));
    return favCars;
  }
);
