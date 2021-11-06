import React from 'react';
import { CreateContractButton, InnerCircle, MiddleCircle, OuterCircle } from "./ContractRoulette.styles";
import ContractCircle from "../ContractCircle/ContractCircle";
import { useSelector } from "react-redux";

const correctSkinWord = ['скинов', 'скин', 'скина', 'скина', 'скина', 'скинов', 'скинов', 'скинов', 'скинов', 'скинов', 'скинов'];

const ContractRoulette = () => {
    const weaponsInContract = useSelector(({contracts}) => contracts.inContract);
    const totalPrice = useSelector(({contracts}) => contracts.totalPrice);
    const countOfWeapons = weaponsInContract.length;

    return (
        <div>
            <OuterCircle>
                <MiddleCircle>
                    {Array(10).fill(0).map((_, index) => (
                        <ContractCircle weapon={weaponsInContract[index]} index={index + 1} key={index}/>))}
                    <InnerCircle>
                        <CreateContractButton>
                            <span>Создать контракт</span>
                            <span>{countOfWeapons} {correctSkinWord[countOfWeapons]} | <strong>{totalPrice} P</strong></span>
                        </CreateContractButton>
                        <span>Получите скин стоимостью</span>
                        <span>От <strong>0 Р</strong> до <strong>0 Р</strong></span>
                    </InnerCircle>
                </MiddleCircle>
            </OuterCircle>
        </div>
    );
};

export default ContractRoulette;
