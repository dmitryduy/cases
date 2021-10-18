import { combineReducers } from "redux";

import { profileReducer } from "./profileReducer";
import { rouletteReducer } from "./rouletteReducer";
import { liveRouletteReducer } from "./liveRouletteReducer";

export const rootReducer = combineReducers({
    profile: profileReducer,
    roulette: rouletteReducer,
    liveRoulette: liveRouletteReducer
});