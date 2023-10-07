import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styles";

const Button = ({ padding, text }) => {
  return (
    <ButtonStyled type="button" padding={padding}>
      {text}
    </ButtonStyled>
  );
};

Button.propTypes = {
	padding: PropTypes.string,
	text: PropTypes.string,
};
export default Button;
