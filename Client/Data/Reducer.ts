import { handleActions, handleAction, Action } from "redux-actions";
import {combineReducers} from "redux";
import ApplicationState from "../Models/ApplicationState";

import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
} from "./Actions";

const initialState: ApplicationState = {
    loginProcessing: false,
    userName: ""
};

const actionss = handleActions<ApplicationState>({
    [LOGIN_REQUEST]: (state: ApplicationState, action: Action<string>): ApplicationState => {
        return {
            ...state,
            loginProcessing: true,
            userName: action.payload
        };
    },
}, initialState);

export default combineReducers({actionss});