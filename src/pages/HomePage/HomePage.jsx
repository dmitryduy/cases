import React from 'react';

import { caseSections } from "../../caseSections";
import CaseSection from "../../components/CaseSection/CaseSection";


const HomePage = () => {
    return caseSections.map(section => <CaseSection key={section.id} section={section}/>);
};

export default HomePage;
