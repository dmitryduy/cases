import React from 'react';
import styled from "styled-components";

const WIPPage = () => {
    return (
        <WIP>
        WIP
        </WIP>
    );
};

export default WIPPage;

const WIP = styled.div`
    font-size: 300px;
    letter-spacing: 20px;
  
    top: 50%;
    left: 50%;
  transform: translate(-50%, 0) rotate(45deg);
    position: absolute;
    color: #e8156a;
    text-shadow: 0 0 20px;
    z-index: 999;
`;