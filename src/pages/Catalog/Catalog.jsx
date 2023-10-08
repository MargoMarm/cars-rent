import Card from "components/Card/Card";
import { useEffect, useState } from "react";
import { selectCars } from "redux/Cars/selectors";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { fetchCars } from "redux/Cars/operations";
import { List, PageWrapper, Button } from "./Catalog.styled";
import { cardsToDisplay } from "utils";

const Catalot = () => {
  const dispach = useDispatch();

  useEffect(() => {
    dispach(fetchCars());
  }, [dispach]);

  const cars = useSelector(selectCars);

  const [page, setPage] = useState(1);

  const handleClick = () => {
    setPage(page + 1);
  };
  const displayedCars = cardsToDisplay(page, cars);
  return (
    <PageWrapper>
      <main>
        <List>
          {displayedCars.map((car) => {
            return <Card key={nanoid()} data={car} />;
          })}
        </List>
        <Button onClick={handleClick}>Load more</Button>
      </main>
    </PageWrapper>
  );
};

export default Catalot;
