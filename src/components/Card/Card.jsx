import Button from "components/Buttons/Buttons";
import {
  Highlight,
  Img,
  Item,
  List,
  MainInfo,
  TextWrapper,
} from "./Card.styled";

import { extractAddress } from "utils";

const Card = ({data}) => {

	const address = extractAddress(data.address);
	
  return (
    <Item>
      <Img src={data?.img} alt={data?.make} />
      <TextWrapper>
        <MainInfo>
          <span>
            {data?.make} <Highlight>{data?.model}</Highlight>, {data?.year}
          </span>
          <span>{data?.rentalPrice}</span>
        </MainInfo>
        <List>
          <li>{address?.city}</li>
          <li>{address?.country}</li>
          <li>{data.rentalCompany}</li>
          <li>{data.type}</li>
          <li>{data.model}</li>
          <li>{data.id}</li>
          <li>{data.functionalities?.[0]}</li>
        </List>
      </TextWrapper>
      <Button text={"Learn more"} padding={"12px 98px"} />
    </Item>
  );
};

export default Card;
