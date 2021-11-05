import styled from "styled-components";

export const Circle = styled.div`
  position: absolute;
  color: #7247ff;
  font-size: 50px;
  width: 14%;
  height: 14%;
  border-radius: 50%;
  background-color: rgba(21, 25, 37, .671);
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center 335%;
  top: 14px;

  svg {
    circle {
      position: relative;
      top: 0;
      left: 0;
    }
  }

  &:nth-child(1) {
    transform: rotate(0deg);

    &>span, &>div {
      transform: rotate(0deg);
    }
  }

  &:nth-child(2) {
    transform: rotate(36deg);

    &>span, &>div {
      transform: rotate(-36deg);
    }
  }

  &:nth-child(3) {
    transform: rotate(72deg);

    &>span, &>div {
      transform: rotate(-72deg);
    }
  }

  &:nth-child(4) {
    transform: rotate(108deg);

    &>span, &>div {
      transform: rotate(-108deg);
    }
  }

  &:nth-child(5) {
    transform: rotate(144deg);

    &>span, &>div {
      transform: rotate(-144deg);
    }
  }

  &:nth-child(6) {
    transform: rotate(180deg);

    &>span, &>div {
      transform: rotate(-180deg);
    }
  }

  &:nth-child(7) {
    transform: rotate(216deg);

    &>span, &>div {
      transform: rotate(-216deg);
    }
  }

  &:nth-child(8) {
    transform: rotate(252deg);

    &>span, &>div {
      transform: rotate(-252deg);
    }
  }

  &:nth-child(9) {
    transform: rotate(288deg);

    &>span, &>div {
      transform: rotate(-288deg);
    }
  }

  &:nth-child(10) {
    transform: rotate(324deg);

    &>span, &>div {
      transform: rotate(-324deg);
    }
  }
`;

export const FilledCircle = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  &:before {
    position: absolute;
    content: "";
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background-image: url("${props => props.src}");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }

  svg {
    circle {
      transform: translate(-50%, -50%);
      stroke: ${props => props.color};
    }
  }
`;

export const Price = styled.span`
    background-color: rgba(10, 10, 10, .9);
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  padding: 2px 5px;
  letter-spacing: 1px;
  font-size: 11px;
  position: absolute;
  bottom: 7px;
  left: 0;
`;

export const RemoveButton = styled.div`
position: absolute;
  width: 20px;
  height: 20px;
  right: 0;
  color: #fff;
  background-color: rgba(23,24,36, .95);
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
  &:before {
    content: 'x';
    font-size: 25px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -55%);
    position: absolute;
    
  }
`;