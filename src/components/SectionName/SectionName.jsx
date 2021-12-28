import React from 'react';

import styled, { css } from "styled-components";

export const SectionNameStyled = styled.h2`
  color: ${props => props.color};
  margin-bottom: 30px;
  font-weight: 400;
  font-size: 30px;
  position: relative;
  display: inline-block;
  ${props => !props.hideBefore && css`
    &:before, &:after {
      position: absolute;
      height: 10px;
      top: 50%;
      width: 294px;
      content: '';
      background-repeat: repeat-x;
      background-image: url("https://givedrop.ru/images/h-decor-part-left.png");
      @media (max-width: 900px) {
        width: 200px;
      }
      @media (max-width: 660px) {
        display: none;
      }
    }

    &:before {
      left: 0;
      transform: translate(calc(-100% - 10px), -50%);
    }

    &:after {
      right: 0;
      transform: translate(calc(100% + 10px), -50%);
    }
  `}
`;

const SectionName = ({name, color, hideBefore}) => {
    return (
        <SectionNameStyled hideBefore={hideBefore} color={color}>{name}</SectionNameStyled>
    );
};

export default SectionName;
