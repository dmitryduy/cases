import React from 'react';
import { caseSections } from "../../caseSections";
import CaseSection from "../../components/CaseSection/CaseSection";
import Container from "../../Container/Container";

const Home = () => {
    return (
        <Container>
            {caseSections.map(section => <CaseSection key={section.id} section={section}/>)}
        </Container>
    );
};

export default Home;
