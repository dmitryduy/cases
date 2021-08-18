import styled from "styled-components";


export const CaseSectionContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const SectionName = styled.h2`
  color: #696f81;
  margin-top: 50px;
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
    transform: translate(calc(-100% - 10px) , -50%);
  }
  &:after {
    right: 0;
    transform: translate(calc(100% + 10px) , -50%);
  }
`;