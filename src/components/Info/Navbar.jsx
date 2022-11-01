import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { HeadingStyle } from '../../Helpers/HeadingStyle';
import activeNavItem from '../../Helpers/activeNavItem'
import LogoutIcon from '../../assets/icons/logout.png';

const Navbar = () => {
  const location = useLocation();
  return (
    <Container>
      <Wrapper>
        <NavList>
          <NavLink to='/about' style={HeadingStyle}>
            <NavItem 
            default={true}
            style={activeNavItem(location, '/about')} >
              Haqqında
            </NavItem>
          </NavLink>
          <NavLink to='/scientific-works' style={HeadingStyle}>
            <NavItem 
            style={activeNavItem(location, '/scientific-works')} >
              Elmi işlər
            </NavItem>
          </NavLink>
          <NavLink to='/achievement' style={HeadingStyle}>
            <NavItem 
            style={activeNavItem(location, '/achievement')} >
              Nailiyyətlər
            </NavItem>
          </NavLink>
        </NavList>
        <Exit>
          <Logout src={LogoutIcon} alt="logout" />
          <span>Çıxış et</span>
        </Exit>
      </Wrapper>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  margin: 0;
  list-style: none;
`;

const NavItem = styled.li`
  background-color: #FAFAFE;
  padding: 1.125rem 2.2rem;
  border: 1px solid lightgray;
  border-top-left-radius: 30px;
  border-top-right-radius: 100px;
  clip-path: polygon(80% 0, 80% 15%, 82% 33%, 86% 53%, 92% 76%, 100% 100%, 0 100%, 0 0);
  box-shadow: inset 0px 0px 12px rgba(0, 0, 0, 0.18);
  border: 0.25px solid #FCF7F8;
  cursor: pointer;
  &:hover {
    opacity: 1!important;
    box-shadow: none;
    border: none;
    border: 1px solid white;
  }
  transition: all 0.4s ease;
`;

const Exit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  transition: all 0.4s ease;
`;

const Logout = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 0.5rem;
`;