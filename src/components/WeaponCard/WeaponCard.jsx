import React from 'react';

import { Card, WeaponImage, WeaponName, WeaponSkin } from "./WeaponCard.styles";

const WeaponCard = ({weapon}) => {
    return (
        <Card color={weapon.color}>
            <WeaponImage src={weapon.img} alt={`${weapon.name} | ${weapon.skin}`}/>
            <WeaponName>{weapon.name}</WeaponName>
            <WeaponSkin>{weapon.skin}</WeaponSkin>
        </Card>
    );
};

export default WeaponCard;
