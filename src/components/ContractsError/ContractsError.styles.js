import styled from "styled-components";

export const NoContractsError = styled.div`
  width: 100%;
  background-image: linear-gradient(0deg, rgba(153, 38, 70, .21), rgba(153, 38, 70, .04));
  color: hsla(0, 0%, 55.3%, .8);
  position: relative;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  &:before {
    position: absolute;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    top: 30px;
    left: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 40px;
    text-shadow: 0 0 5px;
    content: '!';
    box-shadow: 0 0 0 0.125rem #e8156a, 0 0 0.5rem rgb(232 21 106 / 65%), inset 0 0 0.375rem rgb(232 21 106 / 44%);
    color: #e8156a;
  }
  
  span {
    text-align: start;
    margin-left: 100px;
  }
  span:first-child {
    color: #e8156a;
    text-shadow: 0 0 2px;
    font-size: 30px;
    margin-bottom: 5px;
    font-weight: lighter;
  }
  span {
    a {
      color: #fff;
      text-decoration: underline;
    }
  }
`;