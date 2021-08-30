
const types = {
    INCREMENT_MONEY: 'INCREMENT_MONEY',
    DECREMENT_MONEY: "DECREMENT_MONEY"
}

const initialState = {
    totalMoney: 1000,
}

export const profileReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.INCREMENT_MONEY:
            return {totalMoney: +(state.totalMoney + action.payload).toFixed(2)};
        case types.DECREMENT_MONEY:
            return {totalMoney: +(state.totalMoney - action.payload).toFixed(2)};
        default:
            return state;
    }
}

export const incrementMoneyActionCreator = count => {
    return {
        type: types.INCREMENT_MONEY,
        payload: count
    }
}

export const decrementMoneyActionCreator = count => {
    return {
        type: types.DECREMENT_MONEY,
        payload: count
    }
}