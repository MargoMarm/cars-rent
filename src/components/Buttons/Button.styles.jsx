import styled from "@emotion/styled";
import { colors } from "utils";

export const ButtonStyled = styled.button`
  color: ${colors.btnText};
  font-weight: 600;
  line-height: 142.857%;

  background: ${colors.btnMain};
  padding: ${(props) => props.padding};
  border-radius: 12px;
  border: none;

  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;

  transition: background 350ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover,
  &:focus {
    background: ${colors.btnSecondary};
  }
`;
