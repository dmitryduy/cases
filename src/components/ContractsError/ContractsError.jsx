import React from 'react';
import { NoContractsError } from "./ContractsError.styles";

const ContractsError = ({children}) => {
    return (
        <NoContractsError>
            {children}
        </NoContractsError>
    );
};

export default ContractsError;
