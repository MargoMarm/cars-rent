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
} from "./Card.styled";
import { extractAddress } from "utils";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "redux/Cars/carsSlice";
import { selectFavoritesId } from "redux/Cars/selectors";

const Card = ({ info }) => {
  const dispatch = useDispatch();

  const address = extractAddress(info.address);

  const favorites = useSelector(selectFavoritesId);

  const isFavorite = favorites.includes(info.id);

  return (
    <Item>
      <BtnAddFav onClick={() => dispatch(toggleFavorite(info.id))}>
        {isFavorite ? <SvgHeart /> : <SvgHeartEmpty />}
      </BtnAddFav>
      <Img src={info?.img} alt={info?.make} />
      <TextWrapper>
        <MainInfo>
          <span>
            {info?.make} <Highlight>{info?.model}</Highlight>, {info?.year}
          </span>
          <span>{info?.rentalPrice}</span>
        </MainInfo>
        <List>
          <li>{address?.city}</li>
          <li>{address?.country}</li>
          <li>{info.rentalCompany}</li>
          <li>{info.type}</li>
          <li>{info.model}</li>
          <li>{info.id}</li>
          <li>{info.functionalities?.[0]}</li>
        </List>
      </TextWrapper>
      <Button text={"Learn more"} padding={"12px 98px"} />
    </Item>
  );
};

export default Card;
