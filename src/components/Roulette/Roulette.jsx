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
import { useDispatch, useSelector } from "react-redux";
import { incrementMoneyActionCreator } from "../../reducers/profileReducer";
import {
    decrementRoulettesCountActionCreator,
    setMultiplyActionCreator,
} from "../../reducers/rouletteReducer";

const getWeapon = (weapons) => {
    const winnerNumber = Math.floor(Math.random() * 135500);
    return weapons.find(weapon => weapon.chance[0] <= winnerNumber && weapon.chance[1] >= winnerNumber);
}

const Roulette = ({weapons, removeRoulette, rouletteId}) => {
    const [rollAnimation, setRollAnimation] = useState(false);
    const [prepareAnimation, setPrepareAnimation] = useState(false);
    const [showWinner, setShowWinner] = useState(false);


    const winner = useRef(getWeapon(weapons));

    const weaponsArray = useMemo(() => new Array(30).fill(0).map((_, index) => {
        if (index === 24) return <WeaponCard key={index} weapon={winner.current}/>;
        return <WeaponCard key={index} weapon={getWeapon(weapons)}/>;
    }), []);

    const dispatch = useDispatch();

    const sellWeapon = () => {
        dispatch(incrementMoneyActionCreator(winner.current.price));
        dispatch(decrementRoulettesCountActionCreator());
        removeRoulette(rouletteId);
    }

    const showWinnerHandler = () => {
        setShowWinner(true);
    }

    useEffect(() => {
        setPrepareAnimation(true);
        setTimeout(() => setRollAnimation(true), 500);
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
