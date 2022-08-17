import styled from "styled-components";

export const Option = styled.div`
  margin: 0 10px;
  max-width: 300px;
`;

export const FAQImage = styled.div`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #3b01f3;
  background-image: linear-gradient(180deg, #3900f3, #7126ff);
  box-shadow: 0 0 3.125rem rgb(113 38 255 / 33%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 10px;
`;

export const FAQText = styled.span`
  color: #a8a7bd;
  width: 100%;
`;

export const Arrow = styled.img.attrs({
    src: 'https://givedrop.su/images/icon/icon-arrow-right.svg',
    alt: 'arrow'
})`
  width: 45px;
  margin-top: -30px;
`;