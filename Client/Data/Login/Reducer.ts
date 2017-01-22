import { handleActions, handleAction, Action } from "redux-actions";
import { combineReducers } from "redux";
import { ApplicationLoginState }  from "../ApplicationState";
import TokenResponse from "../../Models/Api/TokenResponse";

import {
    CHECKEMAIL_REQUEST,
    CHECKEMAIL_FOUND,
    CHECKEMAIL_NOTFOUND,
    LOGIN_REQUEST,
    LOGIN_FAILURE,
    LOGIN_SUCCESS
} from "./Actions";

const initialState: ApplicationLoginState = {
    email: "",
    isEmailFound: false,
    error: "",
    isProcessing: false,
    token: null
};

export default handleActions<ApplicationLoginState>({
    [CHECKEMAIL_REQUEST]: (state: ApplicationLoginState) => {
        return {
            ...state,
            isProcessing: true
        }
    },
    [CHECKEMAIL_NOTFOUND]: (state: ApplicationLoginState) => {
        return {
            ...state,
            isProcessing: false,
            isEmailFound: false
        }
    },
    [CHECKEMAIL_FOUND]: (state: ApplicationLoginState) => {
        return {
            ...state,
            isProcessing: false,
            isEmailFound: true
        }
    },
    [LOGIN_REQUEST]: (state: ApplicationLoginState, action: Action<string>): ApplicationLoginState => {
        return {
            ...state,
            isProcessing: true,
            email: action.payload
        };
    },
    [LOGIN_FAILURE]: (state: ApplicationLoginState, action: Action<string>): ApplicationLoginState => {
        return {
            ...state,
            isProcessing: false,
            error: action.payload
        }
    },
    [LOGIN_SUCCESS]: (state: ApplicationLoginState, action: Action<TokenResponse>): ApplicationLoginState => {
        return {
            ...state,
            isProcessing: false,
            token: action.payload
        }
    }
}, initialState);