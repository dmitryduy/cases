import styled from "styled-components";

export const RouletteContainer = styled.div`
  width: 600px;
  height: 600px;
  margin: 0 auto 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const OuterCircle = styled.div`
  border-radius: 50%;
  background-color: rgba(23, 24, 36, .6);
  width: 600px;
  height: 600px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  transform-origin: center center;
  transition: ${props => props.time}ms cubic-bezier(0.5, 0, 0.75, 0);

  &.rotating {
    transform: rotateZ(360deg) scale(0);
  }
`;

export const MiddleCircle = styled.div`
  border-radius: 50%;
  background-color: rgba(29, 36, 53, .6);
  width: 85%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InnerCircle = styled.div`
  border-radius: 50%;
  background-image: linear-gradient(180deg, #191c2b, #2c3754);
  box-shadow: 0 0 0 0.3125rem #16172d, 0 0 0 0.625rem #1b1f33;
  width: 60%;
  height: 60%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  &.hidden span, &.hidden button {
    display: none;
  }

  strong {
    color: #5aeaff;
  }

  span {
    color: #fff;
  }

  span:nth-child(2) {
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

export const CreateContractButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border-radius: 20px;
  padding: 10px 30px;
  border: none;
  transition: .2s linear;
  margin: 0 auto 10px;
  &:disabled {
    opacity: .5;
    background-color: #1d2436;
  }

  &:enabled {
    cursor: pointer;
    background-color: #4708ff;
    background-image: linear-gradient(90deg, #561cff 0, #7f4fff);
    color: #fff;

    &:hover {
      background-color: rgb(83 23 255);
      box-shadow: 0 0.1875rem 1.25rem 0.375rem rgb(83 23 255 / 25%);
    }
  }

  span:first-child {
    font-size: 25px;
    font-weight: bold;
    line-height: .8em;
    margin-bottom: 5px;
  }

  span:last-child {
    color: #bfa8ff;
  }
`;
