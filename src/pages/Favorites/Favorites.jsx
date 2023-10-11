import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "redux/Cars/operations";
import { selectFavorites, selectIsLoading } from "redux/Cars/selectors";
import { cardsToDisplay } from "utils";
import { PageWrapper } from "../Catalog/Catalog.styled";
import CardsList from "components/CardsList/CardsList";
import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";
import InfoText from "components/InfoText/InfoText";
import Filters from "components/Filters/Filters";
import Loader from "components/Loader/Loader";


const Favorites = () => {
  const [page, setPage] = useState(1);
  const dispach = useDispatch();
const isLoading = useSelector(selectIsLoading)
  useEffect(() => {
    dispach(fetchCars());
  }, [dispach]);

  const favorites = useSelector(selectFavorites);
  const { displayedCars, isMoreToLoad } = cardsToDisplay(page, favorites);

  const cardsToShow = favorites.length > 8 ? displayedCars : favorites;

  const handleClick = () => {
    setPage(page + 1);
  };

return (
  <PageWrapper>
    {isLoading ? (
      <Loader />
    ) : (
      <>
        {cardsToShow.length === 0 ? (
          <InfoText />
        ) : (
          <>
            <Filters />
            <CardsList data={cardsToShow} />
          </>
        )}
      </>
    )}

    {favorites.length > 8 && isMoreToLoad ? (
      <BtnLoadMore onClick={handleClick} />
    ) : null}
  </PageWrapper>
);


};

export default Favorites;
