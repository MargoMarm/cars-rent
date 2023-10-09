import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styles";

const Button = ({ padding, text, handleClick }) => {
  return (
    <ButtonStyled onClick={handleClick} type="button" padding={padding}>
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
  padding: PropTypes.string,
  text: PropTypes.string,
};
export default Button;
