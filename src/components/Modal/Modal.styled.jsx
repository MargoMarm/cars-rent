import styled from "@emotion/styled";
import { AiOutlineClose } from "react-icons/ai";
import { colors } from "utils";
import { ButtonStyled } from "components/Buttons/Button.styles";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
  z-index: 100;
`;

export const ModalWindow = styled.div`
  position: relative;
  overflow: auto;
  width: 561px;
  max-height: 652px;
  padding: 40px;
  background-color: ${colors.while};
  border-radius: 24px;
`;

export const BtnClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  display: block;
  height: 30px;
  width: 30px;
  right: 10px;
  z-index: 1;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const Icon = styled(AiOutlineClose)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: color 200ms linear;
  width: 16px;
  height: 16px;
  :hover {
    color: #3470ff;
  }
`;

export const Img = styled.img`
  width: 469px;
  height: 248px;
  margin-bottom: 14px;
  margin: 0 auto 14px;
  border-radius: 14px;
  object-fit: cover;

`;

export const Description = styled.p`
  color: ${colors.textMain};
  line-height: 142.857%;
  margin-bottom: 24px;
`;

export const Title = styled.p`
  color: ${colors.textMain};
  line-height: 142.857%;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  /* width: 461px; */
  margin-bottom: 24px;
`;

export const Card = styled.li`
  display: inline-block;
  padding: 7px 14px;
  border-radius: 35px;
  background: ${colors.cardBcg};

  color: ${colors.textMain};
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.24px;

  & > span {
    font-weight: 600;
    color: ${colors.btnMain};
  }
`;

export const Button = ButtonStyled.withComponent("a");
