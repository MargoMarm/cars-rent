import { useEffect, useState } from "react";
import { selectIsLoading, selectVisibleCars } from "redux/Cars/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "redux/Cars/operations";
import { PageWrapper, EmptyText } from "./Catalog.styled";
import { cardsToDisplay } from "utils";
import CardsList from "components/CardsList/CardsList";
import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";
import Filters from "components/Filters/Filters";
import Loader from "components/Loader/Loader";

const Catalot = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchCars());
  }, [dispach]);

  const cars = useSelector(selectVisibleCars);
  const isLoading = useSelector(selectIsLoading);
  const [page, setPage] = useState(1);

  const handleClick = () => {
    setPage(page + 1);
  };
	
  const { displayedCars, isMoreToLoad } = cardsToDisplay(page, cars);
  return (
    <PageWrapper>
      <Filters />
      {isLoading ? (
        <Loader />
      ) : cars.length === 0 ? (
        <EmptyText>There are no cars matching your search...</EmptyText>
      ) : (
        <>
          <CardsList data={displayedCars} />
          {isMoreToLoad && <BtnLoadMore onClick={handleClick} />}
        </>
      )}
    </PageWrapper>
  );
};

export default Catalot;
