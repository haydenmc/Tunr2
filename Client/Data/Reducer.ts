import { combineReducers } from "redux";

import login from "./Login/Reducer";
import player from "./Player/Reducer";

const rootReducer = combineReducers({
    login,
    player
});
export default rootReducer;