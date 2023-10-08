import Card from "components/Card/Card";
import { List } from "./CardsList.styled";
import { nanoid } from "@reduxjs/toolkit";

const CardsList = ({ data }) => {
  return (
    <List>
      {data.map((car) => {
        return <Card key={nanoid()} info={car} />;
      })}
    </List>
  );
};

export default CardsList;
