import React from 'react';

import styled from "styled-components";
import { useSelector } from "react-redux";

export const CaseWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

export const Limited = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  @media (max-width: 700px) {
    width: 50%;
    font-size: 14px;
    margin-bottom: 20px;
    &:last-child {
      order: -1;
    }
  }
  span:last-child {
    font-weight: bold;
    margin-top: 10px;
  }
`;


const LimitedWrapper = ({children, id, limit}) => {
    const opensRemains = useSelector(({cases}) => (
        cases.limitedCases.find((limitedCase => limitedCase.id === +id))
    ))?.remain;

    return (
        <CaseWrapper>
            {opensRemains >= 0 &&
            <Limited>
                <span>Количество открытий</span>
                <span>{limit - opensRemains}</span>
            </Limited>}
            {children}
            {opensRemains >= 0 &&
            <Limited>
                <span>Лимит открытий</span>
                <span>{limit}</span>
            </Limited>}
        </CaseWrapper>
    );
};

export default LimitedWrapper;
