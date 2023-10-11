import { createSelector } from "@reduxjs/toolkit";
import { arrOfUnique, filterCars } from "utils";

export const selectCars = (state) => state.cars.cars;

export const selectFilter = (state) => state.filter.filter;

export const selectError = (state) => state.cars.error;

export const selectIsLoading = (state) => state.cars.isLoading;

export const selectFavoritesId = (state) => state.cars.favorites;

export const selectFavorites = createSelector(
  [selectCars, selectFavoritesId, selectFilter],
  (cars, ids, filter) => {
    const favCars = cars.filter((car) => ids.includes(car.id));
    const favFiltredCars = filterCars(favCars, filter);
    return favFiltredCars;
  }
);
export const selectVisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    const filtredCars = filterCars(cars, filter);
    return filtredCars;
  }
);

export const selectBrands = createSelector([selectCars], (cars) => {
  const uniqueBrands = arrOfUnique(cars, "make");

  const brands = Array.from(uniqueBrands).map((brandName) => ({
    value: brandName.toLowerCase(),
    label: brandName,
  }));
  return brands;
});

export const selectPrice = createSelector([selectCars], (cars) => {
	const uniquePrice = arrOfUnique(cars, "rentalPrice");
	
  const numericPrices = uniquePrice.map((price) =>
    parseInt(price.replace("$", ""), 10)
  );
  const maxPrice = Math.max(...numericPrices);
  const priceOption = [];

  for (let i = 30; i <= maxPrice; i += 10) {
    priceOption.push({ value: i, label: i.toString() });
  }
  return priceOption;
});
