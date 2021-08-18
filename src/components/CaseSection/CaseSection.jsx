import React from 'react';
import { CaseSectionContainer, SectionName } from "./CaseSection.styles";
import Case from "../Case/Case";

const CaseSection = ({section}) => {
    return (
        <div>
            <SectionName>{section.name}</SectionName>
            <CaseSectionContainer>
                {section.cases.map(caseItem => <Case key={caseItem.id} caseItem={caseItem}/>)}
            </CaseSectionContainer>
        </div>
    );
};

export default CaseSection;
