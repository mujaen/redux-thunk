import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import rootReducer from "./modules"
import {applyMiddleware, createStore} from "redux";
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
//import ReduxThunk from "redux-thunk";
import promiseMiddleware from "redux-promise";
import {composeWithDevTools} from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(promiseMiddleware))
    //composeWithDevTools(applyMiddleware(promiseMiddleware, ReduxThunk))
);
const persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
