import styled  from "styled-components";
import { Link } from "react-router-dom";


export const CaseContainer = styled(Link).attrs(props => ({
    to: `${props.name ? `/case/${props.name}` : '/'}`
}))`
  width: 300px;
  margin-bottom: 50px;
  justify-self: center;
  &:hover img {
    transform: translateY(-5px);
  }
`;

export const CaseImage = styled.img`
  max-width: 300px;
  transition: .3s linear;
  margin-bottom: 10px;
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