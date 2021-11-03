import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  background-color: #1d2435;
  display: flex;
  justify-content: space-between;
  flex: 1;
  svg {
    padding: 20px;
    fill: #8a90a1;
    transition: .3s;
    cursor: pointer;
    &:hover {
      fill: #eef3ff;
    }
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  background-color: #262e43;
  li {
    list-style: none;
  }
`;

export const NavbarItem = styled(Link).attrs(props =>({
    to: props.to
}))`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid transparent;
  transition: .3s;
  color: hsla(0, 0%, 100%, .7);
  cursor: pointer;
  opacity: .5;
  margin: 0 20px;
  font-size: 20px;
  &:hover {
    color: #fff;
    opacity: 1;
    text-shadow: 0 0 0.625rem hsl(0deg 0% 100% / 65%);
    border-bottom: 1px solid #959cae;
  }
  img {
    margin-right: 10px;
  }
`;