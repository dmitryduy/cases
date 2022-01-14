import React from 'react';
import {
    NotEnoughMoneyContainer,
    NotEnoughMoneyImage,
    NotEnoughMoneyText
} from "./NotEnoughMoneyBlock.styles";

const NotEnoughMoneyBlock = ({caseImg}) => {
    return (
        <div>
            <NotEnoughMoneyContainer caseImg={caseImg}>
                <NotEnoughMoneyImage src="https://givedrop.ru/images/icon/background-case-nomoney.svg"
                                     alt="not enough money image"/>
            </NotEnoughMoneyContainer>
            <NotEnoughMoneyText>
                <span>У вас недостаточно средств для открытия кейса!</span>
            </NotEnoughMoneyText>
        </div>
    );
};

export default NotEnoughMoneyBlock;
