import styled, { css } from "styled-components";
import { colors } from "../../colors";


export const Card = styled.div`
  width: 150px;
  height: 130px;
  margin: 0 2px 10px;
  flex-shrink: 0;
  position: relative;

  ${props => props.color === colors.lightBlue && css`
    background-image: radial-gradient(at bottom, #002533 0, transparent 75%), radial-gradient(at bottom, #0bf 0, transparent 60%), radial-gradient(at bottom, rgba(0, 187, 255, .9) 0, transparent 66%);
    -webkit-box-shadow: inset 0 -0.125rem #0bf;
    box-shadow: inset 0 -0.125rem #0bf;
  `}
  ${props => props.color === colors.blue && css`
    background-image: radial-gradient(at bottom, #001733 0, transparent 75%), radial-gradient(at bottom, #0073ff 0, transparent 60%), radial-gradient(at bottom, rgba(0, 115, 255, .9) 0, transparent 66%);
    box-shadow: inset 0 -0.125rem #0073ff;
  `}
  ${props => props.color === colors.purple && css`
    background-image: radial-gradient(at bottom, #1e0033 0, transparent 75%), radial-gradient(at bottom, #9400ff 0, transparent 60%), radial-gradient(at bottom, rgba(148, 0, 255, .9) 0, transparent 66%);
    box-shadow: inset 0 -0.125rem #9400ff;
  `}
  ${props => props.color === colors.pink && css`
    background-image: radial-gradient(at bottom, #330025 0, transparent 75%), radial-gradient(at bottom, #ff00b9 0, transparent 60%), radial-gradient(at bottom, rgba(255, 0, 185, .9) 0, transparent 66%);
    box-shadow: inset 0 -0.125rem #f700ff;
  `}
  ${props => props.color === colors.red && css`
    background-image: radial-gradient(at bottom, #330009 0, transparent 75%), radial-gradient(at bottom, #ff002f 0, transparent 60%), radial-gradient(at bottom, rgba(255, 0, 47, .9) 0, transparent 66%);
    box-shadow: inset 0 -0.125rem #ff002f;
  `}
  ${props => props.color === colors.gold && css`
    background-image: radial-gradient(at bottom, #333200 0, transparent 75%), radial-gradient(at bottom, #fffb00 0, transparent 60%), radial-gradient(at bottom, rgba(255, 251, 0, .9) 0, transparent 66%);
    box-shadow: inset 0 -0.125rem #fffb00;
  `}
  padding: 10px;
  background-size: 213% 316%;
  background-position-x: 50%;
  background-position-y: 0;
`;

export const WeaponImage = styled.img`
  width: 86px;
  height: 65px
`;

export const WeaponName = styled.span`
  display: block;
  font-weight: 700;
  color: #bcc0ca;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const WeaponSkin = styled.span`
  display: block;
  color: #fff;
  font-weight: 500;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContractButton = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .3);
  cursor: pointer;
  opacity: 0;
  transition: opacity .3s;
  &:hover {
    opacity: 1;
  }
  &:before {
    position: absolute;
    content: '${props => props.price} P';
    background-color: ${props => props.color};
    color: #fff;
    font-weight: bold;
    padding: 0 5px;
    right: 5px;
    top: 5px;
    opacity: .7;
    border-radius: 3px;
  }
  
`;

export const AddToContractButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 90%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  opacity: .7;
  border: none;
  color: #fff;
  font-weight: bold;
  background-color: ${props => props.color};
  &:hover {
    box-shadow: none;
  }
`;