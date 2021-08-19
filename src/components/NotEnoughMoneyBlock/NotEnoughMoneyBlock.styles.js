import styled from "styled-components";

export const NotEnoughMoneyContainer = styled.div`
  background-color: #161b29;
  border-radius: 5px;
  max-width: 500px;
  max-height: 280px;
  margin: 0 auto 20px;
  background-image: url(${props => props.caseImg});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  &:before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    border-radius: 5px;
    bottom: 0;
    background-color: rgba(22, 27, 41, .9);
    z-index: 1;
  }

`;

export const NotEnoughMoneyImage = styled.img`
  position: relative;
  z-index: 2;
`;

export const NotEnoughMoneyText = styled.div`
  color: #fff;
  margin-bottom: 10px;

  span {
    display: block;
    line-height: 25px;
  }
`;
