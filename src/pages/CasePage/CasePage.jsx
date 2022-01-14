import React, { useEffect } from 'react';

import { useParams } from "react-router-dom";

import { cases } from "../../cases";
import SectionName from "../../components/SectionName/SectionName";
import { CardsContainer, ContentTitle } from "./CasePage.styles";
import WeaponCard from "../../components/WeaponCard/WeaponCard";
import WeaponRoulette from "../../components/WeaponRoulette/WeaponRoulette";


const CasePage = () => {
    const {id} = useParams();
    const caseItem = cases.find(caseItem => caseItem.id === +id);
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <>
            <SectionName name={caseItem.name} color="#fff"/>
                <WeaponRoulette id={id} caseLimit={caseItem.limit} caseImg={caseItem.img} price={caseItem.discountPrice || caseItem.price}
                                weapons={caseItem.weapons}/>
            <ContentTitle>Содержимое кейса</ContentTitle>
            <CardsContainer>
                {caseItem.weapons.map(item => <WeaponCard weapon={item} key={item.id}/>)}
            </CardsContainer>
        </>
    );
};

export default CasePage;
