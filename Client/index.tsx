import * as React from "react";
import * as ReactDOM from "react-dom";
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from "./Data/Reducer";

import ApplicationState from "./Models/ApplicationState";

import Tunr from "./Components/Tunr";

const store: Store<ApplicationState> = createStore(reducer, { });

store.subscribe(() => {
    var state = store.getState();
})

ReactDOM.render(
    <Provider store={store}>
        <Tunr />
    </Provider>,
    document.getElementById("tunr")
);