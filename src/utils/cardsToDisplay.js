
const cardsToDisplay = (page, cars) => {
  const cardsPerPage = 8;
  const endIndex = page * cardsPerPage;
  const displayedCars = cars.slice(0, endIndex);
  const isMoreToLoad = cars.length <= endIndex ? false : true;

//   if (!isMoreToLoad && cars.length !== 0 && page!==1) {
//     Notify.info("You have watched all adverts");
//   }
  return { displayedCars, isMoreToLoad };
};

export default cardsToDisplay;
