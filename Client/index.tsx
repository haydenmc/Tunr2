import * as React from "react";
import * as ReactDOM from "react-dom";
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./Data/Reducer";

import ApplicationState from "./Data/ApplicationState";

import Tunr from "./Components/Tunr";

const initialState = {};

const store: Store<ApplicationState> = createStore(reducer, initialState);

ReactDOM.render(
    <Provider store={store}>
        <Tunr />
    </Provider>,
    document.getElementById("tunr")
);