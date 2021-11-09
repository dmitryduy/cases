import styled from "styled-components";



export const RouletteStyled = styled.div`
  transform: scale(.3);
  transition: .5s linear;
  width: 500px;
  margin: 0 auto 30px;
  overflow-x: hidden;
  position: relative;

  &.prepare {
    transform: scale(1);
  }

  &:before {
    position: absolute;
    content: '';
    width: 2px;
    top: 0;
    background-color: #969668;
    box-shadow: -1px 0 17px 1px rgba(70, 69, 39, 0.8);
    z-index: 2;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const InnerRouletteBlock = styled.div`
  display: flex;
  transition: 8.9s cubic-bezier(0,1,1,1) 100ms;

  &.rolling {
    transform: translateX(${props => props.rollTo}px);
  }
`;

