import Button from "components/Buttons/Buttons";
import {
  Highlight,
  Img,
  Item,
  List,
  MainInfo,
  SvgHeart,
  TextWrapper,
  BtnAddFav,
  SvgHeartEmpty,
  ImgWrapper,
} from "./Card.styled";
import { extractAddress } from "utils";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "redux/Cars/carsSlice";
import { selectFavoritesId } from "redux/Cars/selectors";
import Modal from "components/Modal/Modal";

const Card = ({ info }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleOpen = () => {
    setIsModalOpen(!isModalOpen);
    document.body.classList.toggle("body-scroll-lock");
  };

  const dispatch = useDispatch();

  const address = extractAddress(info.address);

  const favorites = useSelector(selectFavoritesId);

  const isFavorite = favorites.includes(info.id);

  return (
    <Item>
      <ImgWrapper>
        <BtnAddFav onClick={() => dispatch(toggleFavorite(info.id))}>
          {isFavorite ? <SvgHeart /> : <SvgHeartEmpty />}
        </BtnAddFav>
        <Img src={info?.img} alt={info?.make} onClick={toggleOpen} />
      </ImgWrapper>
      <TextWrapper>
        <MainInfo fs={16}>
          <span>
            {info?.make} <Highlight>{info?.model}</Highlight>, {info?.year}
          </span>
          <span>{info?.rentalPrice}</span>
        </MainInfo>
        <List mb={28}>
          <li>{address?.city}</li>
          <li>{address?.country}</li>
          <li>{info.rentalCompany}</li>
          <li>{info.type}</li>
          <li>{info.model}</li>
          <li>{info.id}</li>
          <li>{info.functionalities?.[0]}</li>
        </List>
      </TextWrapper>
      <Button
        handleClick={toggleOpen}
        text={"Learn more"}
        padding={"12px 98px"}
      />
      {isModalOpen && <Modal toggleOpen={toggleOpen} data={info} />}
    </Item>
  );
};

export default Card;
