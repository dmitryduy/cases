import React from 'react';
import { weapon } from "../../weapon";
import { Card, WeaponImage, WeaponName, WeaponSkin } from "./WeaponCard.styles";

const WeaponCard = ({id}) => {
    const weaponCard = weapon.find(weapon => weapon.id === id);

    return (
        <Card color={weaponCard.color}>
            <WeaponImage src={weaponCard.img} alt={`${weaponCard.name} | ${weaponCard.skin}`}/>
            <WeaponName>{weaponCard.name}</WeaponName>
            <WeaponSkin>{weaponCard.skin}</WeaponSkin>
        </Card>
    );
};

export default WeaponCard;
