import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFavorites } from "redux/Cars/selectors";
import { cardsToDisplay } from "utils";
import { PageWrapper } from "../Catalog/Catalog.styled";
import CardsList from "components/CardsList/CardsList";
import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";

const Favorites = () => {
  const [page, setPage] = useState(1);

  const favorites = useSelector(selectFavorites);
  const { displayedCars, isMoreToLoad } = cardsToDisplay(page, favorites);

  const cardsToShow = favorites.length > 8 ? displayedCars : favorites;

  const handleClick = () => {
    setPage(page + 1);
  };

  return (
    <PageWrapper>
      <CardsList data={cardsToShow} />
      {favorites.length > 8 && isMoreToLoad ? (
        <BtnLoadMore onClick={handleClick} />
      ) : null}
    </PageWrapper>
  );
};

export default Favorites;
