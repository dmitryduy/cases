import React, { useState } from 'react';

import NotEnoughMoneyBlock from "../NotEnoughMoneyBlock/NotEnoughMoneyBlock";
import StartRouletteBlock from "../StartRouletteBlock/StartRouletteBlock";
import Roulette from "../Roulette/Roulette";
import styled from "styled-components";
import { useSelector } from "react-redux";


export const RouletteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const WeaponRoulette = ({caseImg, price, weapons}) => {

    const [openCase, setOpenCase] = useState(false);
    const rouletteCount = useSelector(({roulette}) => roulette.multiply);


    const totalMoney = useSelector(({profile}) => profile.totalMoney);

    if (totalMoney < price && !openCase) {
        return <NotEnoughMoneyBlock caseImg={caseImg}/>;
    }

    if (!openCase) {
        return <StartRouletteBlock setOpenCase={setOpenCase} caseImg={caseImg} price={price}/>;
    } else {
        return (
            <>
                <RouletteContainer>
                    {Array(rouletteCount).fill(0).map((_, index) => {
                        return <Roulette rouletteId={index} key={index} setOpenCase={setOpenCase} weapons={weapons}/>;
                    })}
                </RouletteContainer>
            </>
        )
    }
};

export default WeaponRoulette;
