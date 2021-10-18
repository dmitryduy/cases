const initialState = {
    weapons: JSON.parse(localStorage.getItem('liveRoulette')) || []
}

const types = {
    ADD_WEAPON: 'ADD_WEAPON',
}

export const liveRouletteReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_WEAPON:
            if (state.weapons.length === 12) {
                 state.weapons.shift();
                return {
                    weapons: [...state.weapons, action.payload]
                }
            }
            return {
                weapons: [...state.weapons, action.payload]
            }
        default:
            return state;
    }
}

export const addWeaponToLiveActionCreator = weapon => {
    return {
        type: types.ADD_WEAPON,
        payload: weapon,
    }
}