import React from 'react';
import styled from "styled-components";

const MainContainer = styled.div`
  max-width: 2000px;
  width: calc(100vw - 10px);
  padding: 0 150px;
`;

const Container = ({children}) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    );
};

export default Container;
