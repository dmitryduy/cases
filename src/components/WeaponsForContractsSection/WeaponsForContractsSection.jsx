import React from 'react';
import SectionName from "../SectionName/SectionName";
import { ContractWeapons } from "./WeaponsForContractsSection.styles";
import { useDispatch, useSelector } from "react-redux";
import WeaponCard from "../WeaponCard/WeaponCard";
import { addToContractRouletteActionCreator } from "../../reducers/contractsReducer";

const WeaponsForContractsSection = () => {
    const contractWeapons = useSelector(({contracts}) => contracts.contracts);
    const dispatch = useDispatch();

    const addToContract = weapon => {
        dispatch(addToContractRouletteActionCreator(weapon));
    }
    return (
        <div>
            <SectionName name='Доступные для контракта предметы' color='#fff'/>
            <ContractWeapons>
                {contractWeapons.map(weapon => <WeaponCard addToContract={addToContract} key={weapon.timestamp} weapon={weapon} contracts/>)}
            </ContractWeapons>
        </div>
    );
};

export default WeaponsForContractsSection;
