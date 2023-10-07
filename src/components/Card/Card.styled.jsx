import styled from "@emotion/styled";
import { colors } from "utils";

export const Item = styled.li`
  width: 274px;
`;

export const Img = styled.img`
  width: 274px;
  height: 268px;
  object-fit: cover;

  border-radius: 14px;
  margin-bottom: 14px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainInfo = styled.p`
  color: ${colors.textMain};
  font-size: 16px;
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
  height: 40px;
  width: 100%;

  margin-bottom: 28px;

  color: ${colors.textSecondary};
  font-size: 12px;
  line-height: 150%;

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
