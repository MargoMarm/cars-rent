import { useEffect, useState } from "react";
import {  selectVisibleCars } from "redux/Cars/selectors";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "redux/Cars/operations";
import { PageWrapper } from "./Catalog.styled";
import { cardsToDisplay } from "utils";
import CardsList from "components/CardsList/CardsList";
import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";
import Filters from "components/Filters/Filters";

const Catalot = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchCars());
  }, [dispach]);

  const cars = useSelector(selectVisibleCars);

  const [page, setPage] = useState(1);

  const handleClick = () => {
    setPage(page + 1);
  };
  const { displayedCars, isMoreToLoad } = cardsToDisplay(page, cars);
  return (
	  <PageWrapper>
		  <Filters/>
      <CardsList data={displayedCars} />
      {isMoreToLoad ? <BtnLoadMore onClick={handleClick} /> : null}
    </PageWrapper>
  );
};

export default Catalot;
