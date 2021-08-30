import React  from 'react';
import { CaseImage, Multipliers, Multiply, OpenCase } from "./StartRouletteBlock.styles";
import NeonButton from "../NeonButton/NeonButton";
import { useDispatch, useSelector } from "react-redux";
import { decrementMoneyActionCreator } from "../../reducers/profileReducer";
import { addRoulettesCountActionCreator, setMultiplyActionCreator } from "../../reducers/rouletteReducer";

const StartRouletteBlock = ({caseImg, price, setOpenCase}) => {
    const dispatch = useDispatch();
    const totalMoney = useSelector(({profile}) => profile.totalMoney);
    const rouletteCount = useSelector(({roulette}) => roulette.multiply);

    const runCase = () => {
        setOpenCase(true);
        dispatch(addRoulettesCountActionCreator(rouletteCount));
        dispatch(decrementMoneyActionCreator(rouletteCount * price));
    }

    const chooseMultiply = e => {
        dispatch(setMultiplyActionCreator(+e.target.dataset.multiply));
    }

    return (
        <div>
            <CaseImage src={caseImg} alt="case Image"/>
            <div>
                <OpenCase onClick={runCase}>Открыть</OpenCase>
                <NeonButton onClick={null}>{rouletteCount * price} Р</NeonButton>
            </div>
            <span style={{color: "#fff", marginBottom: "10px", display: "inline-block"}}>Открыть за раз</span>
            <Multipliers>
                <Multiply className={rouletteCount === 1 && 'active'} data-multiply={1}
                          onClick={chooseMultiply}>X1</Multiply>
                <Multiply className={rouletteCount === 2 && 'active'} data-multiply={2} onClick={chooseMultiply}
                          disabled={price * 2 >= totalMoney}>X2</Multiply>
                <Multiply className={rouletteCount === 3 && 'active'} data-multiply={3} onClick={chooseMultiply}
                          disabled={price * 3 >= totalMoney}>X3</Multiply>
                <Multiply className={rouletteCount === 4 && 'active'} data-multiply={4} onClick={chooseMultiply}
                          disabled={price * 4 >= totalMoney}>X4</Multiply>
                <Multiply className={rouletteCount === 5 && 'active'} data-multiply={5} onClick={chooseMultiply}
                          disabled={price * 5 >= totalMoney}>X5</Multiply>
                <Multiply className={rouletteCount === 10 && 'active'} data-multiply={10} onClick={chooseMultiply}
                          disabled={price * 10 >= totalMoney}>X10</Multiply>
            </Multipliers>
        </div>
    );
};

export default StartRouletteBlock;
