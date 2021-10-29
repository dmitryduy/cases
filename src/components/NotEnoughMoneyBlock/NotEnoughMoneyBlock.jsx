import React from 'react';
import {
    NotEnoughMoneyContainer,
    NotEnoughMoneyImage,
    NotEnoughMoneyText
} from "./NotEnoughMoneyBlock.styles";
import NeonButton from "../NeonButton/NeonButton";

const NotEnoughMoneyBlock = ({caseImg}) => {
    return (
        <div>
            <NotEnoughMoneyContainer caseImg={caseImg}>
                <NotEnoughMoneyImage src="https://givedrop.ru/images/icon/background-case-nomoney.svg"
                                     alt="not enough money image"/>
            </NotEnoughMoneyContainer>
            <NotEnoughMoneyText>
                <span>У вас недостаточно средств для открытия кейса!</span>
                <span>Пополните ваш баланс</span>
            </NotEnoughMoneyText>
            <NeonButton>Пополнить</NeonButton>
        </div>
    );
};

export default NotEnoughMoneyBlock;
