import * as serviceWorker from './serviceWorker';
import store from "./Redux/reduxStore";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import React from "react";
import App from "./App";
import {Provider} from "react-redux";


//Document Object Model, сокращённо DOM – объектная модель документа,
// которая представляет все содержимое страницы в виде объектов,
// которые можно менять.
ReactDOM.render(
    <BrowserRouter>

            <Provider store={store}>
                <App/>
            </Provider>

    </BrowserRouter>, document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();
