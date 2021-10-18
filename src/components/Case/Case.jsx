import React from 'react';

import {
    CaseContainer,
    CaseImage,
    CaseName,
    CasePreviousPrice,
    CasePrice,
    PriceContainer
} from "./Case.styles";

const Case = ({caseItem}) => {
    return (
        <CaseContainer name={caseItem.id}>
            <CaseImage src={caseItem.img} alt={caseItem.name}/>
            <CaseName>{caseItem.name}</CaseName>
            <PriceContainer>
                <CasePrice>{caseItem.discountPrice || caseItem.price} Р</CasePrice>
                {caseItem.discountPrice && <CasePreviousPrice>{caseItem.price} Р</CasePreviousPrice>}
            </PriceContainer>
        </CaseContainer>
    );
};

export default Case;
