import React, { useEffect, useState } from 'react';

import NeonButton from "../NeonButton/NeonButton";
import { WinnerBlockContainer, WinnerImage, WinnerName, WinnerSkin, ContractButton } from "./WinnerBlock.styles";


const WinnerBlock = ({winner, sellWeapon, addToContracts, contractWinner}) => {
    const [scaleAnimation, setScaleAnimation] = useState(false);

    useEffect(() => {
        setTimeout(() => setScaleAnimation(true), 0);
        },
        []);
    return (
        <WinnerBlockContainer className={`${contractWinner && 'contract-winner'}
             ${scaleAnimation && 'scale'}`}>
            <WinnerImage color={winner.color} img={winner.img}/>
            <WinnerName>{winner.name}</WinnerName>
            <WinnerSkin>{winner.skin}</WinnerSkin>
            <NeonButton onClick={sellWeapon}>Продать за {winner.price} Р</NeonButton>
            <ContractButton onClick={addToContracts}>В контракты</ContractButton>
        </WinnerBlockContainer>
    );
};

export default WinnerBlock;
