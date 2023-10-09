import styled from "@emotion/styled";
import { MdHeartBroken } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { colors } from "utils";

export const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
position: relative;
  font-weight: 700;
  font-size: 34px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Heart = styled(MdHeartBroken)`
position: absolute;
top: 0;
right: -54px;
  fill: ${colors.btnMain};
  width: 44px;
  height: 44px;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  font-weight: 500;
  border-radius: 12px;
  border: 2px solid ${colors.btnMain};
  padding: 12px 50px;
  color: ${colors.btnMain};

  transition: color 250ms ease, border 250ms ease, scale 250ms ease;

  &:hover,
  &:focus {
    color: ${colors.btnSecondary};
    border-color: ${colors.btnSecondary};
    scale: 1.03;
  }
`;
