import React from 'react';
import { HeaderContainer, Logo, LogoContainer, LogoTitle } from "./Header.styles";

import logo from '../../assets/img/logo.png';
import HeaderNavbar from "../HeaderNavbar/HeaderNavbar";
import ProfileInfo from "../ProfileInfo/ProfileInfo";

const Header = () => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Logo src={logo}/>
                <LogoTitle>open cases</LogoTitle>
            </LogoContainer>
            <HeaderNavbar/>
            <ProfileInfo/>
        </HeaderContainer>
    );
};

export default Header;
