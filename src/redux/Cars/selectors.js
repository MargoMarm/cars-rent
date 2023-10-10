import { createSelector } from "@reduxjs/toolkit";

export const selectCars = (state) => state.cars.cars;

export const selectFilter = (state) => state.filter.filter;

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
export const selectVisibleCars = createSelector(
  [selectCars, selectFilter],
  (cars, filter) => {
    const filtredCars = cars.filter((car) => {
      const brandFilterPass =
        filter.brand === "" || car.make.toLowerCase() === filter.brand;

      const priceFilterPass =
        filter.price === "" ||
        parseInt(car.rentalPrice.replace("$", ""), 10) <= filter.price;

      const mileageFilterPass =
        (filter.mileageRange.min === '' ||
          car.mileage >= filter.mileageRange.min) &&
        (filter.mileageRange.max === '' ||
          car.mileage <= filter.mileageRange.max);

      // Combine  filters
      return brandFilterPass && priceFilterPass && mileageFilterPass;
	 });
    return filtredCars;
  }
);

export const selectBrands = createSelector([selectCars], (cars) => {
  const allBrands = cars.map((car) => car.make);
  const uniqueBrandSet = new Set(allBrands);
  const uniqueBrands = Array.from(uniqueBrandSet);

  const brands = Array.from(uniqueBrands).map((brandName) => ({
    value: brandName.toLowerCase(),
    label: brandName,
  }));
  return brands;
});

export const selectPrice = createSelector([selectCars], (cars) => {
  const allPrice = cars.map((car) => car.rentalPrice);
  const uniquePriceSet = new Set(allPrice);
  const uniquePrice = Array.from(uniquePriceSet);
  const numericPrices = uniquePrice.map((price) =>
    parseInt(price.replace("$", ""), 10)
  );
  //   const minPrice = Math.min(...numericPrices);
  const maxPrice = Math.max(...numericPrices);
  const priceOption = [];

  for (let i = 30; i <= maxPrice; i += 10) {
    priceOption.push({ value: i, label: i.toString() });
  }
  return priceOption;
});
