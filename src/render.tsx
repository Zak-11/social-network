import {RootStateType} from "./Redax/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export const rerenderEntireTree = (state: RootStateType) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state}/>,

        </BrowserRouter>,
        document.getElementById('root')
    );

}
