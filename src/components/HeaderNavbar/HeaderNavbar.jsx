import React from 'react';
import { Navbar, NavbarContainer, NavbarItem } from "./HeaderNavbar.styles";

const HeaderNavbar = () => {
    return (
        <NavbarContainer>
            <Navbar>
                <NavbarItem to='/contracts'>
                    <img src="https://givedrop.su/images/icon/icon-contracts.svg" alt="img"/>
                    <span>Контракты</span>
                </NavbarItem>
            </Navbar>
        </NavbarContainer>
    );
};

export default HeaderNavbar;
