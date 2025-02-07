import React from "react";
import Main from "./components/MainComponent";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import {ConfigureStore} from "./redux/configureStore";
import { Provider } from 'react-redux';

const store = ConfigureStore();

export default function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Main />
                </div>
            </BrowserRouter>
        </Provider>
    );
}
