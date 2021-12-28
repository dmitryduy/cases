import styled from "styled-components";

export const WinnerBlockContainer = styled.div`

  width: 400px;
  justify-self: center;
  transform: scale(0);
  transition: transform 1s linear;
  &.scale {
    transform: scaleX(1);
  }
  @media (max-width: 420px) {
    width: 200px;
  }
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
  overflow: hidden;
  height: 25px;
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