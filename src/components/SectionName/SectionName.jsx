import React from 'react';

import styled from "styled-components";

export const SectionNameStyled = styled.h2`
  color: ${props => props.color};
  margin-bottom: 40px;
  font-weight: 400;
  font-size: 30px;
  position: relative;
  display: inline-block;

  &:before, &:after {
    position: absolute;
    height: 10px;
    top: 50%;
    width: 294px;
    content: '';
    background-repeat: repeat-x;
    background-image: url("https://givedrop.ru/images/h-decor-part-left.png");
  }

  &:before {
    left: 0;
    transform: translate(calc(-100% - 10px), -50%);
  }

  &:after {
    right: 0;
    transform: translate(calc(100% + 10px), -50%);
  }
`;

const SectionName = ({name, color}) => {
    return (
        <SectionNameStyled color={color}>{name}</SectionNameStyled>
    );
};

export default SectionName;
