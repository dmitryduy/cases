import styled from "styled-components";

export const LiveRouletteContainer = styled.div`
  width: calc(100vw - 10px);
  display: flex;
  overflow: hidden;
  margin-bottom: 50px;
  position: relative;
  height: 130px;
`;

export const Shadow = styled.div`
  position: absolute;
  height: 100%;
  width: 10%;
  right: 0;
  background-image: linear-gradient(270deg,#10131f,transparent);
`;
