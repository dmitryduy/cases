import React from 'react';

import { useDispatch, useSelector } from "react-redux";

import { CaseImage, Multipliers, Multiply, OpenCase, Text } from "./StartRouletteBlock.styles";
import NeonButton from "../NeonButton/NeonButton";
import { decrementMoneyActionCreator } from "../../reducers/profileReducer";
import { addRoulettesCountActionCreator, setMultiplyActionCreator } from "../../reducers/rouletteReducer";
import { decrementRemainCasesActionCreator } from "../../reducers/casesReducer";

const multiplies = [1, 2, 3, 4, 5, 10];

const StartRouletteBlock = ({caseImg, price, setOpenCase, id}) => {
    const dispatch = useDispatch();
    const totalMoney = useSelector(({profile}) => profile.totalMoney);
    const rouletteCount = useSelector(({roulette}) => roulette.multiply);
    const opensRemains = useSelector(({cases}) =>
        cases.limitedCases.find((limitedCase => limitedCase.id === +id)))?.remain;
    const runCase = () => {
        if (opensRemains) {
            dispatch(decrementRemainCasesActionCreator(rouletteCount, +id));
        }
        setOpenCase(true);
        dispatch(addRoulettesCountActionCreator(rouletteCount));
        dispatch(decrementMoneyActionCreator(rouletteCount * price));
    }

    const chooseMultiply = multiply => {
        dispatch(setMultiplyActionCreator(multiply));
    }

    return (
        <div>
            <CaseImage src={caseImg} alt="case Image"/>
            {<div>
                {opensRemains === 0 ?
                    null
                    :
                    <>
                        <OpenCase onClick={runCase}>Открыть</OpenCase>
                        <NeonButton>{rouletteCount * price} Р</NeonButton>
                    </>
                }
            </div>}
            {opensRemains === 0 ?
                <Text>Лимит открытий</Text>
                : <>
                    <Text>Открыть за раз</Text>
                    <Multipliers>
                        {multiplies.map(multiply => (
                            <Multiply className={rouletteCount === multiply && 'active'}
                                      key={multiply}
                                      onClick={() => chooseMultiply(multiply)}
                                      disabled={price * multiply > totalMoney || opensRemains < multiply}>
                                X{multiply}
                            </Multiply>))}
                    </Multipliers>
                </>
            }
        </div>
    );
};

export default StartRouletteBlock;
