import { Link, ListItem, Nav, NavList, SvgWrapper } from './Sidebar.styled';
import { GiHomeGarage } from 'react-icons/gi';
import { IoCarSportSharp } from 'react-icons/io5';
import { BsBookmarkHeartFill } from 'react-icons/bs';

const Sidebar = () => {
	return (
    <Nav>
      <NavList>
        <ListItem>
          <SvgWrapper>
            <GiHomeGarage size="26" />
          </SvgWrapper>
          <Link to="/">Home</Link>
        </ListItem>
        <ListItem>
          <SvgWrapper>
            <IoCarSportSharp size="26" />
          </SvgWrapper>
          <Link to="/catalog">Catalog</Link>
        </ListItem>
        <ListItem>
          <SvgWrapper>
            <BsBookmarkHeartFill size="26" />
          </SvgWrapper>
          <Link to="/favorites">Favorites</Link>
        </ListItem>
      </NavList>
    </Nav>
  );
};

export default Sidebar;
