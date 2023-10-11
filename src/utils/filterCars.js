const filterCars = (cars,filter) => {
	const filtredCars = cars.filter((car) => {
    const brandFilterPass =
      filter.brand === "" || car.make.toLowerCase() === filter.brand;

    const priceFilterPass =
      filter.price === "" ||
      parseInt(car.rentalPrice.replace("$", ""), 10) <= filter.price;

    const mileageFilterPass =
      (filter.mileageRange.min === "" ||
        car.mileage >= filter.mileageRange.min) &&
      (filter.mileageRange.max === "" ||
        car.mileage <= filter.mileageRange.max);

    return brandFilterPass && priceFilterPass && mileageFilterPass;
  });
  return filtredCars;
}

export default filterCars