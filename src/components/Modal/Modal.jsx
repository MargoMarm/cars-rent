import { List, MainInfo, Highlight } from "components/Card/Card.styled";
import { extractAddress } from "utils";

import {
  Overlay,
  ModalWindow,
  BtnClose,
  Icon,
  Img,
  Title,
  Description,
  Card,
  CardList,
  Button,
} from "./Modal.styled";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";

const Modal = ({ toggleOpen, data }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        toggleOpen();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleOpen]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      toggleOpen();
    }
  };

  const address = extractAddress(data.address);
  const arrOfCondition = data.rentalConditions.split("\n");
	const [text, number] = arrOfCondition[0].split(":");
	const formattedMileage = Number(data.mileage).toLocaleString("en-US");

  return (
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <BtnClose onClick={toggleOpen}>
          <Icon />
        </BtnClose>
          <Img src={data.img} alt="" />
        <MainInfo fs={18}>
          <span>
            {data?.make} <Highlight>{data?.model}</Highlight>, {data?.year}
          </span>
        </MainInfo>
        <List mb={14}>
          <li>{address?.city}</li>
          <li>{address?.country}</li>
          <li>Id:{data.id}</li>
          <li>Year:{data.year}</li>
          <li>Type:{data.type}</li>
          <li>Fuel Consumption:{data.fuelConsumption}</li>
          <li>Engine Size:{data.engineSize}</li>
        </List>
        <Description>{data.description}</Description>
        <Title>Accessories and functionalities:</Title>
        <List mb={5}>
          {data.accessories.map((item) => {
            return <li key={nanoid()}>{item}</li>;
          })}
        </List>
        <List mb={24}>
          {data.functionalities.map((item) => {
            return <li key={nanoid()}>{item}</li>;
          })}
        </List>
        <Title>Rental Conditions:</Title>
        <CardList>
          <Card>
            {text}:<span>{number}</span>
          </Card>
          <Card>{arrOfCondition[1]}</Card>
          <Card>{arrOfCondition[2]}</Card>
          <Card>
            Mileage: <span>{formattedMileage}</span>
          </Card>
          <Card>
            Price: <span>{data.rentalPrice}</span>
          </Card>
        </CardList>
        <Button href="tel:+380730000000" padding="12px 50px">
          Rental car
        </Button>
      </ModalWindow>
    </Overlay>
  );
};

export default Modal;
