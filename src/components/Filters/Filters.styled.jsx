import styled from "@emotion/styled";
import { colors } from "utils";

export const FiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 18px;
  margin-bottom: 50px;

  position: relative;
  z-index: 2;
`;

export const Input = styled.input`
  width: 160px;
  height: 48px;
  padding: 14px 41px 14px 24px;
  border-radius: ${(props) =>
    props.left ? "14px 0px 0px 14px" : " 0px 14px 14px 0px;"};
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;
  border: none;
  border-right: ${(props) =>
    props.left ? "1px solid rgba(138, 138, 137, 0.20)" : "none"};
  outline: none;

  &:hover,
  &:focus {
    border: 1px solid #2684ff;
  }

  &::placeholder {
    color: #121417;
    font-family: Manrope;
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Submit = styled.button`
  padding: 14px 44px;
  border-radius: 12px;
  border: none;
  background: ${colors.btnMain};
  font-weight: 600;
  color: ${colors.btnText};
  margin-left: 18px;
  transition: background 350ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
  &:hover,
  &:focus {
    background: ${colors.btnSecondary};
  }
`;
