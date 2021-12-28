import styled from "styled-components";

export const ContractWeapons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-height: 500px;
  overflow: auto;
  margin-bottom: 40px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;


export const ContractFaqs = styled.div`
  background-color: #121622;  
  padding: 50px;
  margin-bottom: 50px;
  display: flex;
  justify-content: space-evenly;
`;