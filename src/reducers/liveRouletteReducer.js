import { cases } from "../cases";

const initialState = {
    weapons: JSON.parse(localStorage.getItem('liveRoulette')) || []
}

const types = {
    ADD_WEAPON: 'ADD_WEAPON',
}

export const liveRouletteReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.ADD_WEAPON:
            const {img: caseUrl, name: caseName} = cases.find(caseItem => caseItem.id === +action.payload.caseId);
            if (state.weapons.length === 15) {
                 state.weapons.shift();
                return {
                    weapons: [...state.weapons, {...action.payload.weapon, timestamp: new Date().getTime(), caseUrl, caseName}]
                }
            }
            return {
                weapons: [...state.weapons, {...action.payload.weapon, timestamp: new Date().getTime(), caseUrl, caseName}]
            }
        default:
            return state;
    }
}

export const addWeaponToLiveActionCreator = (weapon, caseId) => {
    return {
        type: types.ADD_WEAPON,
        payload: {
            weapon,
            caseId
        },
    }
}