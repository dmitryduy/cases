import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


export const CaseContainer = styled(Link).attrs(props => ({
    to: `${props.name ? `/case/${props.name}` : '/'}`
}))`
  ${props => props.wip ? css`
            & * {
              opacity: .4;
            }

            position: relative;

            &:before {
              content: 'WIP';
              font-size: 100px;
              letter-spacing: 20px;
              transform: rotate(45deg);
              top: 20%;
              left: 20%;
              position: absolute;
              color: #e8156a;
              text-shadow: 0 0 20px;
              z-index: 999;
            }
          `
          : css`
            cursor: pointer;

            &:hover img {
              transform: translateY(-10px);
            }
          `
  }
  max-width: 300px;
  min-width: 200px;
  margin: 0 10px 50px;


  &:last-child {
    flex: 1;
  }


  @media (max-width: 700px) {
    max-width: 300px;
  }
`;

export const CaseImage = styled.img`
  max-width: 300px;
  transition: .3s linear;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    max-width: 290px;
  }
`;

export const CaseName = styled.h5`
  font-weight: 700;
  font-size: 17px;
  color: #fff;
  margin-bottom: 10px;
  @media (max-width: 700px) {
    font-size: 22px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
`;


export const CasePrice = styled.span`
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 18px;
  background-image: linear-gradient(90deg, #4404ff 19%, #5316ff 64%, #6227ff);
  z-index: 1;
  @media (max-width: 700px) {
    font-size: 25px;
  }
`;

export const CasePreviousPrice = styled.span`
  text-decoration: line-through;
  color: #f44051;
  padding: 5px 10px 5px 20px;
  border-radius: 10px;
  background-color: #0f121e;
  transform: translateX(-10px);
  @media (max-width: 700px) {
    font-size: 24px;
    margin-left: 10px;
  }
`;