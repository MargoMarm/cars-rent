import { Link, ListItem, Nav, NavList } from "./Sidebar.styled";
import { GiHomeGarage } from "react-icons/gi";
import { IoCarSportSharp } from "react-icons/io5";
import { BsBookmarkHeartFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <Nav>
      <NavList>
        <ListItem>
          <Link to="/">
            <GiHomeGarage size="26" />
            Home
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/catalog">
            <IoCarSportSharp size="26" />
            Catalog
          </Link>
        </ListItem>
        <ListItem>
          <Link to="/favorites">
            <BsBookmarkHeartFill size="26" />
            Favorites
          </Link>
        </ListItem>
      </NavList>
    </Nav>
  );
};

export default Sidebar;
