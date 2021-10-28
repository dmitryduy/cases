import React from 'react';
import { Circle, Progress, ProgressBar } from "./CircleProgressBar.styles";

const CircleProgressBar = ({max, current}) => {
    return (
        <ProgressBar>
            <Progress>{Math.floor(current/max*100)}%</Progress>
            <svg width={50} height={50}>
                <circle cx={25} cy={25} r={23} strokeWidth={4} style={{stroke: 'rgb(20,18,30)'}} fill='transparent'/>
                <Circle cx={25} cy={25} r={23} strokeWidth={4} stroke='#4404ff' length={2*Math.PI*23} offset={current/max}/>
            </svg>
        </ProgressBar>
    );
};

export default CircleProgressBar;
