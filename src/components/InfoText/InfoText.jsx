import { Heart, Link, Text, Wrapper } from "./InfoText.styled";

const InfoText = () => {
  return (
    <Wrapper>
      <Text>
        You havn't added any adverts to your favorites... <Heart />
      </Text>
      <Link to={"/catalog"}>Go to catalog</Link>
    </Wrapper>
  );
};

export default InfoText;
