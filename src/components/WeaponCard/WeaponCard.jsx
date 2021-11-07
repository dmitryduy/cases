import React from 'react';

import { AddToContractButton, Card, ContractButton, WeaponImage, WeaponName, WeaponSkin } from "./WeaponCard.styles";

const WeaponCard = ({weapon, contracts, addToContract}) => {
    return (
        <Card color={weapon.color}>
            <WeaponImage src={weapon.img} alt={`${weapon.name} | ${weapon.skin}`}/>
            <WeaponName>{weapon.name}</WeaponName>
            <WeaponSkin>{weapon.skin}</WeaponSkin>
            {contracts && <ContractButton price={weapon.price} color={weapon.color}>
                <AddToContractButton onClick={() => addToContract(weapon)} color={weapon.color}>Добавить в контракт</AddToContractButton>
            </ContractButton>}
        </Card>
    );
};

export default WeaponCard;
