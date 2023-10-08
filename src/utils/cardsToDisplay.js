const cardsToDisplay = (page, cars) => {
  const cardsPerPage = 8;
  const endIndex = page * cardsPerPage;
  const displayedCars = cars.slice(0, endIndex);
  return displayedCars;
};

export default cardsToDisplay;
