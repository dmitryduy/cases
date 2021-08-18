import React from 'react';
import styled from "styled-components";

const MainContainer = styled.div`
  max-width: 2000px;
  width: 100vw;
  padding: 0 90px;
`;

const Container = ({children}) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    );
};

export default Container;
