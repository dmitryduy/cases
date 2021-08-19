import styled from "styled-components";


export const CaseImage = styled.img`
  max-width: 400px;
`;

export const OpenCase = styled.button`
border-radius: 20px;
  border: 2px solid #252838;
  color: #fff;
  margin-right: 20px;
  background-color: transparent;
  padding: 10px 15px;
  font-size: 17px;
  cursor: pointer;
  font-weight: 700;
  transition: .2s linear;
  &:hover {
    box-shadow: 0 0.1875rem 1.25rem 0.375rem rgb(83 23 255 / 10%);
  }
  
`;

export const Multipliers = styled.div`
display: flex;
  justify-content: center;
`;

export const Multiply = styled.button`
  border: none;
color: #fff;
  background-color: #191e28;
  padding: 5px 10px;
  cursor: pointer;
  transition: .3s;
  margin: 0 2px;
  border-radius: 5px;
  font-size: 20px;
  &:hover {
    background-color: #414853;
  }
  &.active {
    background-color: #414853;
  }
  &:disabled {
    opacity: .1;
  }
`;