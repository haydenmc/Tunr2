import { createAction, Action } from "redux-actions";
import { Dispatch } from 'redux';
import "whatwg-fetch";
import ApplicationState from "../../Data/ApplicationState";
import TokenResponse from "../../Models/Api/TokenResponse";

// --------------------
// Action names
// --------------------
// Check email
export const CHECKEMAIL_REQUEST = "CHECKEMAIL_REQUEST";
export const CHECKEMAIL_FOUND = "CHECKEMAIL_FOUND";
export const CHECKEMAIL_NOTFOUND = "CHECKEMAIL_NOTFOUND";
// Login
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// --------------------
// Action creators
// --------------------
// Check email
export const checkEmailRequest = createAction<string, string>(
    CHECKEMAIL_REQUEST,
    (email: string) => email
);

export const checkEmailFound = createAction(CHECKEMAIL_FOUND);

export const checkEmailNotFound = createAction(CHECKEMAIL_NOTFOUND);

export const checkEmail = (email: string) => {
    return async (dispatch: any) => {
        try {
            dispatch(checkEmailRequest(email));
            var response = await fetch("/Token/CheckEmail/" + encodeURIComponent(email));
            if (!response.ok) {
                dispatch(checkEmailNotFound());
            }
            dispatch(checkEmailFound());
        }
        catch (error) {
            dispatch(checkEmailNotFound());
        }
    }
}

// Login
export const loginRequest = createAction<string, string>(
    LOGIN_REQUEST,
    (username: string) => username
);

export const loginFailure = createAction<string, string>(
    LOGIN_FAILURE,
    (error: string) => error
);

export const loginSuccess = createAction<TokenResponse, string, TokenResponse>(
    LOGIN_SUCCESS,
    (username: string, tokenResponse: TokenResponse) => {
        return tokenResponse;
    }
)

export const login = (username: string, password: string) => {
    return async (dispatch: any) => {
        try {
            dispatch(loginRequest(username));
            var response = await fetch("/Token", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json" 
                },
                body: JSON.stringify({
                    "email": username,
                    "password": password
                })
            });
            if (!response.ok) {
                throw new Error(await response.text());
            }
            var result = await response.json();
            dispatch(loginSuccess(username, result as TokenResponse));
        }
        catch (error) {
            dispatch(loginFailure(error.message))
        }
    }
}