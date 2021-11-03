import styled from "styled-components";
import NeonButton from "../NeonButton/NeonButton";


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
  transition: 8s ease-in-out;

  &.rolling {
    transform: translateX(${props => props.rollTo}px);
  }
`;

export const WinnerBlock = styled.div`
  width: 300px;
  margin: 0 0 30px;
  flex-basis: auto;
`;

export const WinnerImage = styled.div`
  background-image: url(${props => props.img});
  margin: 0 auto 15px;
  width: 120px;
  height: 120px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &:before {
    position: absolute;
    top: 50%;
    left: 50%;
    content: '';
    z-index: -1;
    box-shadow: 10px 0 40px 35px ${props => props.color};
  }
`;

export const WinnerName = styled.span`
  display: block;
  color: #fff;
  margin-bottom: 5px;
  font-size: 20px;
`;

export const WinnerSkin = styled.span`
  display: block;
  font-size: 17px;
  color: #0f5473;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const ContractButton = styled.button`
  border-radius: 15px;
  padding: 10px 10px;
  margin-left: 5px;
  border: none;
  background-color: #2d354b;
  font-weight: 700;
  cursor: pointer;
  font-size: 15px;
  color: #fff;
`;