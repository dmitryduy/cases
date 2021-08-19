import React from 'react';
import styled from "styled-components";

export const Button = styled.button`
  background-color: #4708ff;
  background-image: linear-gradient(90deg, #561cff 0, #7f4fff);
  color: #fff;
  border: none;
  border-radius: 15px;
  padding: 10px 15px;
  font-size: 17px;
  font-weight: 700;
  cursor: pointer;
  transition: .2s linear;
  margin-bottom: 60px;
  &:hover {
    background-color: rgb(83 23 255);
    box-shadow: 0 0.1875rem 1.25rem 0.375rem rgb(83 23 255 / 25%);
  }
`;

const NeonButton = ({children, onClick}) => {
    return (
        <Button onClick={onClick}>
            {children}
        </Button>
    );
};

export default NeonButton;
