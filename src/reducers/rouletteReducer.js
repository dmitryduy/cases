const initialState = {
    multiply: 1,
    rouletteIds: null,
 
}
const types = {
    CHANGE_MULTIPLY: 'CHANGE_MULTIPLY',
    ADD_WINNER_WEAPON: 'ADD_WINNER_WEAPON'
    
}

export const rouletteReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MULTIPLY:
            return {...state, multiply: action.payload};
        case types.ADD_WINNER_WEAPON:
            if (!state.rouletteIds) {
                return {...state, rouletteIds: [action.payload]};
            }
            else {
                return {...state, rouletteIds: [...state.rouletteIds, action.payload]};
            }
        default:
            return state;
    }
}

export const setMultiplyActionCreator = multiply => {
    return {
        type: types.CHANGE_MULTIPLY,
        payload: multiply,
    }
}

export const addWinnerActionCreator = rouletteId => {
    return {
        type: types.ADD_WINNER_WEAPON,
        payload: rouletteId
    }
}
