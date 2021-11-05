import styled from "styled-components";

export const OuterCircle = styled.div`
  border-radius: 50%;
  background-color: rgba(23,24,36, .6);
  width: 600px;
  height: 600px;
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MiddleCircle = styled.div`
  border-radius: 50%;
  background-color: rgba(29,36,53, .6);
  width: 85%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const InnerCircle = styled.div`
  border-radius: 50%;
  background-image: linear-gradient(180deg, #191c2b, #2c3754);
  box-shadow: 0 0 0 0.3125rem #16172d, 0 0 0 0.625rem #1b1f33;
  width: 60%;
  height: 60%;
`;