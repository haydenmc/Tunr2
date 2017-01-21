import { handleActions, handleAction, Action } from "redux-actions";
import {combineReducers} from "redux";
import ApplicationState from "../Models/ApplicationState";
import TokenResponse from "../Models/Api/TokenResponse";

import {
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
} from "./Actions";

const initialState: ApplicationState = {
    loginProcessing: false,
    userName: ""
};

const reducer = handleActions<ApplicationState>({
    [LOGIN_REQUEST]: (state: ApplicationState, action: Action<string>): ApplicationState => {
        return {
            ...state,
            loginProcessing: true,
            userName: action.payload
        };
    },
    [LOGIN_FAILURE]: (state: ApplicationState, action: Action<string>): ApplicationState => {
        return {
            ...state,
            loginProcessing: false,
            /* TODO: Report error here */
        }
    },
    [LOGIN_SUCCESS]: (state: ApplicationState, action: Action<TokenResponse>): ApplicationState => {
        return {
            ...state,
            loginProcessing: false,
            authToken: action.payload
        }
    }
}, initialState);

export default reducer;