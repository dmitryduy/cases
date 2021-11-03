import styled from "styled-components";

export const Circle = styled.div`
position: absolute;
  color: #7247ff;
  font-size: 50px;
  width: 17%;
  height: 17%;
  border-radius: 50%;
  background-color: rgba(21,25,37,.671);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center 288%;
  top: 4px;
  &:after {
    content: '${props => props.index}';
    transform: rotate(0deg);
  }
  &:nth-child(1) {
    transform: rotate(0deg);
    &:after {
      transform: rotate(0deg);
    }
  }
  &:nth-child(2) {
    transform: rotate(36deg);
    &:after {
      transform: rotate(-36deg);
    }
  }
  &:nth-child(3) {
    transform: rotate(72deg);
    &:after {
      transform: rotate(-72deg);
    }
  }
  &:nth-child(4) {
    transform: rotate(108deg);
    &:after {
      transform: rotate(-108deg);
    }
  }
  &:nth-child(5) {
    transform: rotate(144deg);
    &:after {
      transform: rotate(-144deg);
    }
  }
  &:nth-child(6) {
    transform: rotate(180deg);
    &:after {
      transform: rotate(-180deg);
    }
  }
  &:nth-child(7) {
    transform: rotate(216deg);
    &:after {
      transform: rotate(-216deg);
    }
  }
  &:nth-child(8) {
    transform: rotate(252deg);
    &:after {
      transform: rotate(-252deg);
    }
  }
  &:nth-child(9) {
    transform: rotate(288deg);
    &:after {
      transform: rotate(-288deg);
    }
  }
  &:nth-child(10) {
    transform: rotate(324deg);
    &:after {
      transform: rotate(-324deg);
    }
  }
`;