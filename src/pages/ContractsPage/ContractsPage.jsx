import React from 'react';
import SectionName from "../../components/SectionName/SectionName";
import WeaponsForContractsSection from "../../components/WeaponsForContractsSection/WeaponsForContractsSection.jsx";
import ContractRoulette from "../../components/ContractRoulette/ContractRoulette";
import ContractsError from "../../components/ContractsError/ContractsError";
import styled from "styled-components";

const Error = styled.div`
  @media (min-width: 701px) {
    display: none;
  }
`;

const Main = styled.div`
  @media (max-width: 700px) {
    display: none;
  }
`;


const ContractsPage = () => {
    return (
        <div>
            <Error>
                <ContractsError>
                    <span>Ошибка разрешения</span>
                    <span>Данная ширина не поддерживается контрактами.</span>
                </ContractsError>
            </Error>
            <Main>
                <SectionName name='Контракты' color='#fff'/>
                <ContractRoulette/>
                <WeaponsForContractsSection/>
            </Main>
        </div>
    );
};

export default ContractsPage;
