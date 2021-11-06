import React from 'react';
import { Arrow, FAQImage, FAQText, Option } from "./FAQOption.styles";

const FAQOption = ({img, text, last}) => {
    return (
        <>
            <Option>
                <FAQImage>
                    <img src={img} alt="" width={50} height={50}/>
                </FAQImage>
                <FAQText>{text}</FAQText>
            </Option>
            {!last && <Arrow/>}
        </>
    );
};

export default FAQOption;
