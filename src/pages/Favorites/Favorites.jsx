import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "redux/Cars/operations";
import { selectFavorites, selectIsLoading } from "redux/Cars/selectors";
import { PageWrapper } from "../Catalog/Catalog.styled";
import CardsList from "components/CardsList/CardsList";
import InfoText from "components/InfoText/InfoText";
import Filters from "components/Filters/Filters";
import Loader from "components/Loader/Loader";
import { resetFilter } from "redux/Cars/filterSlice";

const Favorites = () => {
  const dispach = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  useEffect(() => {
    dispach(fetchCars());
    dispach(resetFilter());
  }, [dispach]);

  const { favCars, favFiltredCars } = useSelector(selectFavorites);

  return (
    <PageWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {favCars.length === 0 ? (
            <InfoText
              text={"You haven't added any adverts to your favorites..."}
              btn
            />
          ) : (
            <>
              <Filters />
              <CardsList data={favFiltredCars} />
            </>
          )}
        </>
      )}
    </PageWrapper>
  );
};

export default Favorites;
