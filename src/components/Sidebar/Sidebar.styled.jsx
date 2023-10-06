import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
// import { colors } from 'utils';

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
  transition: width 0.3s ease;
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
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 2px;
    background: radial-gradient(
      circle at 94.02% 88.03%,
      #54a4ff,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 500ms ease;
    z-index: -10;
  }
`;

export const ListItem = styled.li`
  padding-bottom: 60px;
  

  &:hover a:after {
    opacity: 1;
  }
`;

export const SvgWrapper = styled.div`
  width: 26px;
  height: 26px;
  position: relative;
  left: -19px;
  cursor: pointer;
  /* @media screen and(min-width:600px) {
      width: 32px;
      height: 32px;
      left: -15px;
    } */
`;
