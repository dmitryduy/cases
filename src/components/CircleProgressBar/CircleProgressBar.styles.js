import styled from "styled-components";

export const ProgressBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(30%, -30%);
  width: 50px;
  height: 50px;
`;

export const Progress = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #bb8dee;
`;

export const Circle = styled.circle`
  fill: rgba(15,18,30,.7);
  transform-origin: center;
  transform: rotate(-90deg);
  stroke-dasharray: ${props => props.length} ${props => props.length};
  stroke-dashoffset: ${props => props.length - props.length*props.offset};
`;