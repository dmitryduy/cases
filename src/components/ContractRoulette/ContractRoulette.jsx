import React from 'react';
import { InnerCircle, MiddleCircle, OuterCircle } from "./ContractRoulette.styles";
import ContractCircle from "../ContractCircle/ContractCircle";

const ContractRoulette = () => {
    return (
        <div>
            <OuterCircle>
                <MiddleCircle>
                    {Array(10).fill(0).map((_, index) => <ContractCircle index={index + 1} key={index}/>)}
                    <InnerCircle>

                    </InnerCircle>
                </MiddleCircle>
            </OuterCircle>
        </div>
    );
};

export default ContractRoulette;
