import React from 'react';

import {
    CaseContainer,
    CaseImage,
    CaseName,
    CasePreviousPrice,
    CasePrice,
    PriceContainer
} from "./Case.styles";
import CircleProgressBar from "../CircleProgressBar/CircleProgressBar";
import { useSelector } from "react-redux";

const Case = ({caseItem}) => {
    const casesRemain = useSelector(({cases}) => cases.limitedCases.find(limitedCase => limitedCase.id === caseItem.id));
    console.log(casesRemain);
    return (
        <CaseContainer name={caseItem.id}>
            <div style={{position: 'relative'}}>
                <CaseImage src={caseItem.img} alt={caseItem.name}/>
                {caseItem.limit && <CircleProgressBar max={caseItem.limit} current={caseItem.limit - casesRemain.remain}/>}
            </div>
            <CaseName>{caseItem.name}</CaseName>
            <PriceContainer>
                <CasePrice>{caseItem.discountPrice || caseItem.price} Р</CasePrice>
                {caseItem.discountPrice && <CasePreviousPrice>{caseItem.price} Р</CasePreviousPrice>}
            </PriceContainer>
        </CaseContainer>
    );
};

export default Case;
