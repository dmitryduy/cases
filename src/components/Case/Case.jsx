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

const Case = ({caseItem}) => {
    return (
        <CaseContainer name={caseItem.id}>
            <div style={{position: 'relative'}}>
                <CaseImage src={caseItem.img} alt={caseItem.name}/>
                {caseItem.limit && <CircleProgressBar max={caseItem.limit} current={490}/>}
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
