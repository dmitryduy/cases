import React from 'react';

import { useSelector } from "react-redux";

import { LiveRouletteContainer, Shadow } from "./LiveRoulette.styles";
import WeaponCard from "../WeaponCard/WeaponCard";


const LiveRoulette = () => {

    const weapons = useSelector(({liveRoulette}) => liveRoulette.weapons);
    localStorage.setItem('liveRoulette', JSON.stringify(weapons));

    return (
        <LiveRouletteContainer>
            {weapons.map(weapon => {
                return <WeaponCard weapon={weapon} key={weapon.timestamp} liveRoulette/>
            })}
            <Shadow/>
        </LiveRouletteContainer>
    );
};

export default LiveRoulette;
