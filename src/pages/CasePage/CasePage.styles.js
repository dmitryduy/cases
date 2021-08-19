import styled from "styled-components";

export const ContentTitle = styled.h2`
  color: #fff;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 30px;
  position: relative;
  display: flex;
  overflow: hidden;

   &:after {
    position: absolute;
    height: 10px;
    top: 50%;
    width: 100vw;
    content: '';
    background-repeat: repeat-x;
    background-image: url("https://givedrop.ru/images/h-decor-part-left.png");
  }
  

  &:after {
    left: 270px;
    transform: translateY( -50%);
  }  
`;


export const CardsContainer = styled.div`
display: grid;
  row-gap: 10px;
  grid-template-columns: repeat(8, 1fr);
  margin-bottom: 50px;
`;