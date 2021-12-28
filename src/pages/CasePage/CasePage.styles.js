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
    left: 270px;
    transform: translateY(-50%);
  }

  @media (max-width: 600px) {
    &:after {
      display: none;
    }
  }
`;


export const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 5px;
  margin-bottom: 50px;
`;

