import {combineReducers} from "redux"

import getScorelistReducer from "./getScorelistReducer"

const rootReducer = combineReducers({
    getScorelistReducer,
});

export default rootReducer;
