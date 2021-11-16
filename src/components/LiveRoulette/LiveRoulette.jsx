import React from 'react';
import { LiveRouletteContainer, Shadow } from "./LiveRoulette.styles";
import WeaponCard from "../WeaponCard/WeaponCard";
import { useSelector } from "react-redux";


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
