import React from 'react';

import styled from "styled-components";
import { useSelector } from "react-redux";

export const CaseWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Limited = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  span:last-child {
    font-weight: bold;
    margin-top: 40px;
  }
`;


const LimitedWrapper = ({children, id, limit}) => {
    const opensRemains = useSelector(({cases}) =>
        cases.limitedCases.find((limitedCase => limitedCase.id === +id)))?.remain;

    return (
        <CaseWrapper>
            {opensRemains &&
            <Limited>
                <span>Количество открытий</span>
                <span>{limit - opensRemains}</span>
            </Limited>}
            {children}
            {opensRemains &&
            <Limited>
                <span>Лимит открытий</span>
                <span>{limit}</span>
            </Limited>}
        </CaseWrapper>
    );
};

export default LimitedWrapper;
