import { combineReducers } from "redux";

import { profileReducer } from "./profileReducer";
import { rouletteReducer } from "./rouletteReducer";
import { liveRouletteReducer } from "./liveRouletteReducer";
import { casesReducer } from "./casesReducer";
import { contractsReducer } from "./contractsReducer";

export const rootReducer = combineReducers({
    profile: profileReducer,
    roulette: rouletteReducer,
    liveRoulette: liveRouletteReducer,
    cases: casesReducer,
    contracts: contractsReducer
});