import styled from "styled-components";
import { Link } from "react-router-dom";


export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #171d2d;
  height: 70px;
  margin-bottom: 10px;
`;

export const LogoContainer = styled(Link).attrs({
    to: '/'
})`
  display: flex;
  align-items: center;
  padding: 0 30px;
  @media (max-width: 500px) {
    padding: 0 10px;
  }
`;

export const Logo = styled.img`
  padding-right: 10px;
`;

export const LogoTitle = styled.span`
  text-transform: uppercase;
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  @media (max-width: 680px) {
    display: none;
  }
`;
