import { combineReducers } from "redux";
import { profileReducer } from "./profileReducer";
import { rouletteReducer } from "./rouletteReducer";

export const rootReducer = combineReducers({
    profile: profileReducer,
    roulette: rouletteReducer,
});