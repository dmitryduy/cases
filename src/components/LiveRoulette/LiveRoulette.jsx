import React from 'react';
import { LiveRouletteContainer } from "./LiveRoulette.styles";
import WeaponCard from "../WeaponCard/WeaponCard";

const LiveRoulette = () => {
    return (
        <LiveRouletteContainer>
            <WeaponCard id={1}/>
            <WeaponCard id={2}/>
            <WeaponCard id={3}/>
            <WeaponCard id={4}/>
            <WeaponCard id={5}/>
            <WeaponCard id={1}/>
            <WeaponCard id={4}/>
            <WeaponCard id={2}/>
            <WeaponCard id={1}/>
            <WeaponCard id={2}/>
            <WeaponCard id={3}/>
            <WeaponCard id={4}/>
            <WeaponCard id={1}/>
            <WeaponCard id={2}/>
            <WeaponCard id={3}/>
            <WeaponCard id={4}/>
        </LiveRouletteContainer>
    );
};

export default LiveRoulette;
