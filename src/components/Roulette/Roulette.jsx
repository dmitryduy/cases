import React, { useEffect, useMemo, useRef, useState } from 'react';

import {
    InnerRouletteBlock,
    RouletteStyled,
    WinnerBlock,
    WinnerImage,
    WinnerName,
    WinnerSkin
} from "./Roulette.styles";
import WeaponCard from "../WeaponCard/WeaponCard";
import NeonButton from "../NeonButton/NeonButton";
import { useDispatch } from "react-redux";
import { incrementMoneyActionCreator } from "../../reducers/profileReducer";
import {
    decrementRoulettesCountActionCreator,
} from "../../reducers/rouletteReducer";
import { addWeaponToLiveActionCreator } from "../../reducers/liveRouletteReducer";

const COUNT_OF_WEAPONS_IN_ROULETTE = 30;
const WINNER_INDEX = 24;

const getWeapon = (weapons) => {
    const winnerNumber = Math.floor(Math.random() * 135500);
    return weapons.find(weapon => weapon.chance[0] <= winnerNumber && weapon.chance[1] >= winnerNumber);
}


const Roulette = ({weapons, removeRoulette, rouletteId}) => {
    const [rollAnimation, setRollAnimation] = useState(false);
    const [prepareAnimation, setPrepareAnimation] = useState(false);
    const [showWinner, setShowWinner] = useState(false);
    // if user skipped animation or leave roulette page, weapons will be automate sell
    let isSellWeapon = useRef(false);

    const winner = useRef(getWeapon(weapons));

    const weaponsArray = useMemo(() => new Array(COUNT_OF_WEAPONS_IN_ROULETTE).fill(0).map((_, index) => {
        if (index === WINNER_INDEX)  {
            return <WeaponCard key={index} weapon={winner.current}/>;
        }
        return <WeaponCard key={index} weapon={getWeapon(weapons)}/>;
    }), []);

    const dispatch = useDispatch();

    const sellWeapon = () => {
        isSellWeapon.current = true;
        dispatch(incrementMoneyActionCreator(winner.current.price));
        dispatch(decrementRoulettesCountActionCreator());
        dispatch(addWeaponToLiveActionCreator(winner.current));
        removeRoulette(rouletteId);
    }

    const showWinnerHandler = () => {
        setShowWinner(true);
    }

    useEffect(() => {
        setPrepareAnimation(true);
        let timerId = setTimeout(() => setRollAnimation(true), 500);
        return () => {
            if (!isSellWeapon.current) {
                clearTimeout(timerId);
                sellWeapon();
            }
        }
    }, []);

    return (
        <>{showWinner
            ? <WinnerBlock>
                <WinnerImage color={winner.current.color} img={winner.current.img}/>
                <WinnerName>{winner.current.name}</WinnerName>
                <WinnerSkin>{winner.current.skin}</WinnerSkin>
                <NeonButton onClick={sellWeapon}>Продать за {winner.current.price} Р</NeonButton>
            </WinnerBlock>
            : <div style={{display: "flex", flexDirection: "column", margin: "0 auto"}}>
                <RouletteStyled className={prepareAnimation && "prepare"}>
                    <InnerRouletteBlock onTransitionEnd={showWinnerHandler}
                                        className={rollAnimation && "rolling"}
                                        rollTo={-3450 - Math.floor(Math.random() * 130)}>
                        {weaponsArray}
                    </InnerRouletteBlock>
                </RouletteStyled>
                <span style={{color: "#fff", marginBottom: "20px", display: "block"}}>Открывается</span>
            </div>}
        </>
    );
};

export default Roulette;
