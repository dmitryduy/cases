import React from 'react';

import {
    AddToContractButton,
    Card,
    Chance,
    ContractButton, FromCase,
    WeaponImage,
    WeaponName,
    WeaponSkin
} from "./WeaponCard.styles";

const WeaponCard = ({weapon, contracts, addToContract, liveRoulette}) => {
    return (
        <Card color={weapon.color} liveRoulette={liveRoulette}>
            {liveRoulette && <FromCase img={weapon.caseUrl} caseName={weapon.caseName}/>}
            <WeaponImage src={weapon.img} alt={`${weapon.name} | ${weapon.skin}`}/>
            <WeaponName>{weapon.name}</WeaponName>
            <WeaponSkin>{weapon.skin}</WeaponSkin>
            {!contracts && <Chance>{(weapon.chance[1] - weapon.chance[0])/ 1000} %</Chance>}
            {contracts && <ContractButton price={weapon.price} color={weapon.color}>
                <AddToContractButton onClick={() => addToContract(weapon)} color={weapon.color}>Добавить в контракт</AddToContractButton>
            </ContractButton>}
        </Card>
    );
};

export default WeaponCard;
