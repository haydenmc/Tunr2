import { createAction, Action } from "redux-actions";
import "whatwg-fetch";
import ApplicationState from "../Models/ApplicationState";
import TokenResponse from "../Models/Api/TokenResponse";

// Action names
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// Action creators
export const loginRequest = createAction<string, string>(
    LOGIN_REQUEST,
    (username: string) => username
);

export const loginFailure = createAction<string, string>(
    LOGIN_FAILURE,
    (error: string) => error
);

export const loginSuccess = createAction<ApplicationState, string, TokenResponse>(
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