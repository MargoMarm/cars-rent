import { useEffect } from "react";
import { selectIsLoading, selectVisibleCars } from "redux/Cars/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "redux/Cars/operations";
import { PageWrapper, EmptyText } from "./Catalog.styled";
import CardsList from "components/CardsList/CardsList";
import Filters from "components/Filters/Filters";
import Loader from "components/Loader/Loader";
import { resetFilter } from "redux/Cars/filterSlice";

const Catalot = () => {
  const dispach = useDispatch();

  useEffect(() => {
	  dispach(fetchCars());
	  dispach(resetFilter())
  }, [dispach]);

  const cars = useSelector(selectVisibleCars);
  const isLoading = useSelector(selectIsLoading);


	
  return (
    <PageWrapper>
      <Filters />
      {isLoading ? (
        <Loader />
      ) : cars.length === 0 ? (
        <EmptyText>There are no cars matching your search...</EmptyText>
      ) : (
        <>
          <CardsList data={cars} />
        </>
      )}
    </PageWrapper>
  );
};

export default Catalot;
