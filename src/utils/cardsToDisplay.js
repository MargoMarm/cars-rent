import { Notify } from "notiflix";

const cardsToDisplay = (page, cars) => {
  const cardsPerPage = 8;
  const endIndex = page * cardsPerPage;
  const displayedCars = cars.slice(0, endIndex);

  if (cars.length !== 0 && cars.length < endIndex) {
    Notify.info("You have watched all adverts!");
  }
  return displayedCars;
};

export default cardsToDisplay;
