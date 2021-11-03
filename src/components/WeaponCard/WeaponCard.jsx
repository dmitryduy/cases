import React from 'react';

import { Card, ContractButton, WeaponImage, WeaponName, WeaponSkin } from "./WeaponCard.styles";
import NeonButton from "../NeonButton/NeonButton";

const WeaponCard = ({weapon, contracts, addToContract}) => {
    return (
        <Card color={weapon.color}>
            <WeaponImage src={weapon.img} alt={`${weapon.name} | ${weapon.skin}`}/>
            <WeaponName>{weapon.name}</WeaponName>
            <WeaponSkin>{weapon.skin}</WeaponSkin>
            {contracts && <ContractButton price={weapon.price}>
                <NeonButton onClick={() => addToContract(weapon)}>Добавить в контракт</NeonButton>
            </ContractButton>}
        </Card>
    );
};

export default WeaponCard;
