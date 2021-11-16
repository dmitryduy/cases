import React, { useEffect, useState } from 'react';

import NotEnoughMoneyBlock from "../NotEnoughMoneyBlock/NotEnoughMoneyBlock";
import StartRouletteBlock from "../StartRouletteBlock/StartRouletteBlock";
import Roulette from "../Roulette/Roulette";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { setMultiplyActionCreator } from "../../reducers/rouletteReducer";
import LimitedWrapper from "../LimitedWrapper/LimitedWrapper";


export const RouletteContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const WeaponRoulette = ({caseImg, price, weapons, id, caseLimit}) => {
    const [openCase, setOpenCase] = useState(false);
    const rouletteCount = useSelector(({roulette}) => roulette.multiply);


    const [rouletteIds, setRouletteIds] = useState([1]);
    //count of active roulettes
    const activeRoulettes = useSelector(({roulette}) => roulette.activeRoulettes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setMultiplyActionCreator(1));
    }, []);

    useEffect(() => {
        setRouletteIds(Array(rouletteCount).fill(0).map((_, index) => index + 1))
    }, [rouletteCount]);


    const totalMoney = useSelector(({profile}) => profile.totalMoney);

    const removeRoulette = rouletteId => {
        setRouletteIds(prev => prev.filter(item => item !== rouletteId));
        if (activeRoulettes === 1) {
            setOpenCase(false);
            setRouletteIds([1]);
            dispatch(setMultiplyActionCreator(1));
        }
    }

    if (totalMoney < price && !openCase) {
        return (
            <LimitedWrapper id={id} limit={caseLimit}>
                <NotEnoughMoneyBlock caseImg={caseImg}/>
            </LimitedWrapper>

        )
    }

    if (!openCase) {
        return (
            <LimitedWrapper id={id} limit={caseLimit}>
                <StartRouletteBlock id={id} setOpenCase={setOpenCase} caseImg={caseImg} price={price}/>
            </LimitedWrapper>
        )
    } else {
        return (
            <RouletteContainer>
                {rouletteIds.map((rouletteId) => {
                    return <Roulette rouletteId={rouletteId} key={rouletteId} removeRoulette={removeRoulette}
                                     weapons={weapons}/>;
                })}
            </RouletteContainer>
        )
    }
};

export default WeaponRoulette;