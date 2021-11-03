import React from 'react';
import SectionName from "../../components/SectionName/SectionName";
import WeaponsForContractsSection from "../../components/WeaponsForContractsSection/WeaponsForContractsSection.jsx";
import ContractRoulette from "../../components/ContractRoulette/ContractRoulette";



const ContractsPage = () => {
    return (
        <div>
            <SectionName name='Контракты' color='#fff'/>
            <ContractRoulette/>
            <WeaponsForContractsSection/>
        </div>
    );
};

export default ContractsPage;
