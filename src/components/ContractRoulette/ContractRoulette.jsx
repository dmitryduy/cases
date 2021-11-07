import React, { useState } from 'react';
import {
    CreateContractButton,
    InnerCircle,
    MiddleCircle,
    OuterCircle,
    RouletteContainer
} from "./ContractRoulette.styles";
import ContractCircle from "../ContractCircle/ContractCircle";
import { useDispatch, useSelector } from "react-redux";
import {
    addToContractsActionCreator,
    chooseWinnerActionCreator,
    clearWinnerActionCreator
} from "../../reducers/contractsReducer";
import WinnerBlock from "../WinnerBlock/WinnerBlock";
import { incrementMoneyActionCreator } from "../../reducers/profileReducer";

const correctSkinWord = ['скинов', 'скин', 'скина', 'скина', 'скина', 'скинов', 'скинов', 'скинов', 'скинов', 'скинов', 'скинов'];
const transitionAnimationTime = 1000;

const ContractRoulette = () => {
    const weaponsInContract = useSelector(({contracts}) => contracts.inContract);
    const totalPrice = useSelector(({contracts}) => contracts.totalPrice);
    const winner = useSelector(({contracts}) => contracts.winner);
    const [startRotatingAnimation, setRotatingAnimation] = useState(false);

    const minPrice = (totalPrice / 3).toFixed(2);
    const maxPrice = (totalPrice * 3).toFixed(2);
    const dispatch = useDispatch();

    const countOfWeapons = weaponsInContract.length;


    const createContract = () => {
        if (countOfWeapons === 0) {
            return;
        }
        setRotatingAnimation(true);
        setTimeout(() => {
            dispatch(chooseWinnerActionCreator(minPrice, maxPrice));
            setRotatingAnimation(false);
        }, transitionAnimationTime);
    }

    const sellWeapon = () => {
        dispatch(incrementMoneyActionCreator(winner.price));
        dispatch(clearWinnerActionCreator());
    }

    const addToContract = () => {
        dispatch(addToContractsActionCreator(winner));
        dispatch(clearWinnerActionCreator());
    }

    return (
        <RouletteContainer>
            {winner
                ?
            <WinnerBlock winner={winner} sellWeapon={sellWeapon} addToContracts={addToContract} contractWinner/>
            :
                <OuterCircle time={transitionAnimationTime} className={startRotatingAnimation && 'rotating'}>
                    <MiddleCircle>
                        {Array(10).fill(0).map((_, index) => (
                            <ContractCircle weapon={weaponsInContract[index]} index={index + 1} key={index}/>))}
                        <InnerCircle className={startRotatingAnimation && 'hidden'}>
                            <CreateContractButton onClick={createContract} disabled={countOfWeapons <= 3}>
                                <span>Создать контракт</span>
                                <span>{countOfWeapons} {correctSkinWord[countOfWeapons]} | <strong>{totalPrice} P</strong></span>
                            </CreateContractButton>
                            <span>Получите скин стоимостью</span>
                            <span>От <strong>{minPrice} Р</strong> до <strong>{maxPrice} Р</strong></span>
                        </InnerCircle>
                    </MiddleCircle>
                </OuterCircle>
            }
        </RouletteContainer>
    );
};

export default ContractRoulette;
