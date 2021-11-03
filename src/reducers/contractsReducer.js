const initialState = {
    contracts: JSON.parse(localStorage.getItem('contracts')) || [],
    inContract: [],
}

const types = {
    ADD_TO_CONTRACTS: 'ADD_TO_CONTRACTS',
    ADD_TO_CONTRACT_ROULETTE: 'ADD_TO_CONTRACT_ROULETTE'
}

export const contractsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CONTRACTS:
            localStorage.setItem('contracts', JSON.stringify([...state.contracts, action.payload]));
            return {
                ...state,
                contracts: [...state.contracts, {...action.payload, timestamp: new Date().getTime()}]
            };
        case types.ADD_TO_CONTRACT_ROULETTE:
            if (state.inContract.length === 10) {
                return state;   
            }
            return {
                ...state,
                inContract: [...state.inContract, action.payload]
            }
        default:
            return state;
    }
}

export const addToContractsActionCreator = weapon => {
    return {
        type: types.ADD_TO_CONTRACTS,
        payload: weapon
    }
}

export const addToContractRouletteActionCreator = weapon => {
    return {
        type: types.ADD_TO_CONTRACT_ROULETTE,
        payload: weapon,
    }
}