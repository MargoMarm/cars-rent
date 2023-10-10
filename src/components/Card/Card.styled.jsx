import styled from "@emotion/styled";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { colors } from "utils";

export const SvgHeartEmpty = styled(FaRegHeart)`
  width: 18px;
  height: 18px;
  fill: rgb(208 208 208);
`;

export const SvgHeart = styled(FaHeart)`
  width: 18px;
  height: 18px;
  fill: ${colors.btnMain};
`;

export const BtnAddFav = styled.button`
  position: absolute;
  padding: 5px;
  top: 14px;
  right: 14px;
  border: none;
  background: transparent;
`;
export const Item = styled.li`
  width: 274px;
  /* position: relative; */
`;
export const ImgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 14px;
  width: 274px;
  height: 268px;
`;
export const Img = styled.img`

  width: 274px;
  height: 268px;
  object-fit: cover;

  border-radius: 14px;
  margin-bottom: 14px;

  cursor: pointer;

  /* transform: scale(1.1);
  margin-left: 10px;
  transition: 0.3s ease-in-out;

  &:hover {
    margin-left: 0px;
  } */
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainInfo = styled.p`
  color: ${colors.textMain};
  font-size: ${(props) => props.fs}px;
  font-weight: 500;
  line-height: 150%;

  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
`;

export const Highlight = styled.span`
  color: ${colors.btnMain};
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  margin-bottom: ${(props) => props.mb}px;
  max-height: 39px;
  color: ${colors.textSecondary};
  font-size: 12px;
  line-height: 160%;

  & > li {
    position: relative;
    &:not(:last-child) {
      margin-right: 12px;
    }
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      display: block;
      width: 1px;
      background-color: rgba(18, 20, 23, 0.1);
      height: 16px;
      top: 2px;
      right: -6px;
    }
  }
`;
