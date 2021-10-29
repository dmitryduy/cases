const {caseSections} = require("../caseSections");
const {cases} = require("../cases");

const types = {
    DECREMENT_REMAINS_CASES: 'DECREMENT_REMAINS_CASES'
}

const getLimitedCases = () => {
    const limitedCasesId = caseSections.find(caseSection => caseSection.id === 3).caseIds;
    const filteredArray = limitedCasesId.map(caseId => {
        const caseItem = cases.find(caseItem => caseItem.id === caseId);
        return {
            id: caseItem.id,
            remain: caseItem.limit
        }
    })
    localStorage.setItem('limitedCases', JSON.stringify(filteredArray));
    return filteredArray;
}

const initialState = {
    limitedCases: JSON.parse(localStorage.getItem('limitedCases')) || getLimitedCases()

}

export const casesReducer = (state=initialState, action) => {
    switch (action.type) {
        case types.DECREMENT_REMAINS_CASES:
            let temp =  {
                ...state,
                limitedCases: state.limitedCases.map(limitedCase => {
                    if (limitedCase.id === action.payload.id) {
                        return {
                            id: limitedCase.id,
                            remain: limitedCase.remain - action.payload.count
                        }
                    }
                    return limitedCase;
                })
            }
            localStorage.setItem('limitedCases', JSON.stringify(temp));
            return temp;
        default:
            return state;
    }
}

export const decrementRemainCasesActionCreator = (count, id) => {
    return {
        type: types.DECREMENT_REMAINS_CASES,
        payload: {
            id,
            count
        }
    }
}