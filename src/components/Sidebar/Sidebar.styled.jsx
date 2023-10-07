import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { colors } from "utils";

export const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0px auto;
  padding: 0px 16px;
`;

export const Nav = styled.nav`
  position: fixed;
  width: 70px;
  top: 0;
  height: 100vh;
  z-index: 100;
  background-color: #202020;
  overflow: hidden;
  transition: width 0.3s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  cursor: pointer;
  box-shadow: 4px 7px 10px rgba(0, 0, 0, 0.4);

  &:hover {
    width: 200px;
  }
  /* @media screen and (min-width: 600px) {
    width: 80px;
  } */
`;

export const NavList = styled.ul`
  list-style-type: none;
  color: white;
  padding-top: 70px;
  padding-left: 38px;
`;

export const Link = styled(NavLink)`
  position: relative;
  display: block;
  top: -25px;
  padding-left: 25px;
  padding-right: 15px;
  transition: all 0.3s ease;
  margin-left: 25px;
  margin-right: 10px;
  text-decoration: none;
  color: white;
  font-size: 1.35em;

  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2px;
    background: radial-gradient(
      circle at 94.02% 88.03%,
      ${colors.btnMain},
      transparent 100%
    );
    opacity: 0;
    transition: opacity 500ms cubic-bezier(0.17, 0.67, 0.83, 0.67);
    z-index: -10;
  }

  & > svg {
    position: absolute;
    left: -46px;
  }
`;

export const ListItem = styled.li`
  padding-bottom: 60px;

  & svg {
    transition: fill 350ms ease;
  }
  &:hover svg {
    fill: ${colors.btnMain};
  }
  &:hover a:after {
    opacity: 1;
  }
`;
