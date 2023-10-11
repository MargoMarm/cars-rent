import { Heart, Link, Text, Wrapper } from "./InfoText.styled";

const InfoText = ({ text, btn }) => {
  return (
    <Wrapper>
      <Text>
        {text} <Heart />
      </Text>
     { btn ? <Link to={"/catalog"}>Go to catalog</Link> : null}
    </Wrapper>
  );
};

export default InfoText;
