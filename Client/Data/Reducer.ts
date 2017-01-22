import { combineReducers } from "redux";

import login from "./Login/Reducer";

const rootReducer = combineReducers({
    login
});
export default rootReducer;