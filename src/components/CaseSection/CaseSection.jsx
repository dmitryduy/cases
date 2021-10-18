import React from 'react';

import { CaseSectionContainer } from "./CaseSection.styles";
import Case from "../Case/Case";
import SectionName from "../SectionName/SectionName";
import { cases } from "../../cases";

const CaseSection = ({section}) => {
    return (
        <>
            <SectionName name={section.name} color='#696f81'/>
            <CaseSectionContainer>
                {section.caseIds.map(caseId => {
                    const caseItem = cases.find(caseItem => caseItem.id === caseId);
                    return <Case key={caseItem.id} caseItem={caseItem}/>
                })}
            </CaseSectionContainer>
        </>
    );
};

export default CaseSection;
