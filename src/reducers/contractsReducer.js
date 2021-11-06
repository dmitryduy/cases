const initialState = {
    contracts: JSON.parse(localStorage.getItem('contracts')) || [],
    inContract: [],
    totalPrice: 0,
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
                inContract: [...state.inContract, action.payload],
                totalPrice: state.totalPrice += action.payload.price
            }
        case types.REMOVE_FROM_CONTRACT_ROULETTE:
            const removeWeapon = state.inContract.find(weapon => weapon.timestamp === action.payload);
            return {
                contracts: [...state.contracts, removeWeapon],
                inContract: state.inContract.filter(weapon => weapon.timestamp !== action.payload),
                totalPrice: state.totalPrice -= removeWeapon.price
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