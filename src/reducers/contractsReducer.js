import { weapons } from "../weapon";

const initialState = {
    contracts: JSON.parse(localStorage.getItem('contracts')) || [],
    inContract: [],
    totalPrice: 0,
    winner: null,
}

const types = {
    ADD_TO_CONTRACTS: 'ADD_TO_CONTRACTS',
    ADD_TO_CONTRACT_ROULETTE: 'ADD_TO_CONTRACT_ROULETTE',
    REMOVE_FROM_CONTRACT_ROULETTE: 'REMOVE_FROM_CONTRACT_ROULETTE',
    CHOOSE_WINNER: 'CHOOSE_WINNER',
    CLEAR_WINNER: 'CLEAR WINNER',
}

export const contractsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CONTRACTS:
            localStorage.setItem('contracts', JSON.stringify([...state.contracts, {...action.payload, timestamp: new Date().getTime()}]));
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
                totalPrice: +(state.totalPrice + action.payload.price).toFixed(2)
            }
        case types.REMOVE_FROM_CONTRACT_ROULETTE:
            const removeWeapon = state.inContract.find(weapon => weapon.timestamp === action.payload);
            return {
                contracts: [...state.contracts, removeWeapon],
                inContract: state.inContract.filter(weapon => weapon.timestamp !== action.payload),
                totalPrice: +(state.totalPrice - removeWeapon.price).toFixed(2)
            }
        case types.CHOOSE_WINNER:
            const {minPrice, maxPrice} = action.payload;
            const weaponsArray = weapons.filter(weapon => weapon.price >= minPrice && weapon.price <= maxPrice);
            const winnerId = Math.floor(Math.random() * weaponsArray.length);
            const winner = weaponsArray[winnerId];
            localStorage.setItem('contracts', JSON.stringify(state.contracts));
            return {
                ...state,
                inContract: [],
                winner: winner
            }
        case types.CLEAR_WINNER:
            return {
                ...state,
                winner: null,
                totalPrice: 0
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

export const chooseWinnerActionCreator = (minPrice, maxPrice) => {
    return {
        type: types.CHOOSE_WINNER,
        payload: {
            minPrice,
            maxPrice
        }
    }
}

export const clearWinnerActionCreator = () => {
    return {
        type: types.CLEAR_WINNER
    }
}