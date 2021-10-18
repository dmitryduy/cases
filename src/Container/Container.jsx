import React from 'react';
import styled from "styled-components";

const MainContainer = styled.div`
  padding: 0 100px;
  @media (max-width: 1050px) {
    padding: 0 20px;
  }
`;

const Container = ({children}) => {
    return (
        <MainContainer>
            {children}
        </MainContainer>
    );
};

export default Container;
