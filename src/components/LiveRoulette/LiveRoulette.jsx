import React from 'react';
import { LiveRouletteContainer, Shadow } from "./LiveRoulette.styles";
import WeaponCard from "../WeaponCard/WeaponCard";
import { useSelector } from "react-redux";

let id = 0;


const LiveRoulette = () => {

    const weapons = useSelector(({liveRoulette}) => liveRoulette.weapons);
    localStorage.setItem('liveRoulette', JSON.stringify(weapons));

    return (
        <LiveRouletteContainer>
            {weapons.map(weapon => {
                id++;
                return <WeaponCard weapon={weapon} key={id}/>
            })}
            <Shadow/>
        </LiveRouletteContainer>
    );
};

export default LiveRoulette;
