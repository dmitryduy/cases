import styled from "styled-components";

export const ContentTitle = styled.h2`
  color: #fff;
  font-weight: 700;
  font-size: 30px;
  position: relative;
  display: flex;
  overflow: hidden;
  margin: 30px 0;
  

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

  @media (max-width: 600px) {
    grid-template-columns: repeat(7, 1fr);
    font-size: 25px;
  }
`;


export const CardsContainer = styled.div`
display: grid;
  row-gap: 10px;
  grid-template-columns: repeat(8, 1fr);
  margin-bottom: 50px;
  @media (max-width: 1400px) {
    grid-template-columns: repeat(7, 1fr);
  }
  @media (max-width: 1250px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 1000px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media (max-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 350px) {
    grid-template-columns: repeat(1, 1fr);
    
  }
`;