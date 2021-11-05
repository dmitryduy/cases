import React from 'react';
import { Circle, FilledCircle, Price, RemoveButton } from "./ContractCircle.styles";
import { useDispatch } from "react-redux";
import { removeFromContractRouletteActionCreator } from "../../reducers/contractsReducer";

const ContractCircle = ({index, weapon}) => {
    const dispatch = useDispatch();

    const returnWeaponToContracts = () => {
        dispatch(removeFromContractRouletteActionCreator(weapon.timestamp));
    }

    return (
        <Circle>
            {weapon
                ?
                <FilledCircle src={weapon.img} color={weapon.color}>
                    <RemoveButton onClick={returnWeaponToContracts}/>
                    <svg width='100%' height='100%'>
                        <circle cx='100%' cy='100%' r='calc(50% - 1px)' fill='transparent' strokeWidth={2}/>
                    </svg>
                    <Price>{weapon.price} Р</Price>
                </FilledCircle>
                :
                <span>{index}</span>}
        </Circle>
    );
};

export default ContractCircle;
