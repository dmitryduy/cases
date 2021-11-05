const initialState = {
    contracts: JSON.parse(localStorage.getItem('contracts')) || [],
    inContract: [],
}

const types = {
    ADD_TO_CONTRACTS: 'ADD_TO_CONTRACTS',
    ADD_TO_CONTRACT_ROULETTE: 'ADD_TO_CONTRACT_ROULETTE',
    REMOVE_FROM_CONTRACT_ROULETTE: 'REMOVE_FROM_CONTRACT_ROULETTE'
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
                contracts: state.contracts.filter(weapon => weapon.timestamp !== action.payload.timestamp),
                inContract: [...state.inContract, action.payload]
            }
        case types.REMOVE_FROM_CONTRACT_ROULETTE:
            return {
                contracts: [...state.contracts, state.inContract.find(weapon => weapon.timestamp === action.payload)],
                inContract: state.inContract.filter(weapon => weapon.timestamp !== action.payload)
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

export const removeFromContractRouletteActionCreator = timestamp => {
    return {
        type: types.REMOVE_FROM_CONTRACT_ROULETTE,
        payload: timestamp
    }
}