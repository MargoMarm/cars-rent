import { useState } from "react";
import Card from "components/Card/Card";
import { List } from "./CardsList.styled";
import { nanoid } from "@reduxjs/toolkit";
import { cardsToDisplay } from "utils";
import BtnLoadMore from "components/BtnLoadMore/BtnLoadMore";
import InfoText from "components/InfoText/InfoText";

const CardsList = ({ data }) => {
  const [page, setPage] = useState(1);

  const { displayedCars, isMoreToLoad } = cardsToDisplay(page, data);

  const cardsToShow = data.length > 8 ? displayedCars : data;

  const handleClick = () => {
    setPage(page + 1);
  };
  return (
    <>
      {cardsToShow.length === 0 ? (
			  <InfoText text={"There is now cars "} btn={false } />
      ) : (
        <>
          <List>
            {cardsToShow.map((car) => (
              <Card key={nanoid()} info={car} />
            ))}
          </List>
          {data.length > 8 && isMoreToLoad ? (
            <BtnLoadMore onClick={handleClick} />
          ) : null}
        </>
      )}
    </>
  );
};

export default CardsList;
