import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 1;
  background-color: #1d2435;
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
  @media (max-width: 680px) {
    img {
      margin-right: 0;
    }
    span {
      display: none;
    }
  }
`;