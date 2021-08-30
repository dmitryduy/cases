const initialState = {
    multiply: 1,
    activeRoulettes: 0,

}
const types = {
    CHANGE_MULTIPLY: 'CHANGE_MULTIPLY',
    ADD_ROULETTES_COUNT: 'ADD_ROULETTES_COUNT',
    DECREMENT_ROULETTES_COUNT: 'DECREMENT_ROULETTES_COUNT',
}

export const rouletteReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.CHANGE_MULTIPLY:
            return {...state, multiply: action.payload};
        case types.ADD_ROULETTES_COUNT:
                return {...state, activeRoulettes: action.payload};
        case types.DECREMENT_ROULETTES_COUNT:
            return {...state, activeRoulettes: state.activeRoulettes - 1}
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

export const addRoulettesCountActionCreator = roulettesCount => {
    return {
        type: types.ADD_ROULETTES_COUNT,
        payload: roulettesCount
    }
}

export const decrementRoulettesCountActionCreator = () => {
    return {
        type: types.DECREMENT_ROULETTES_COUNT
    }
}
