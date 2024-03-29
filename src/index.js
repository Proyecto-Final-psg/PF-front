import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux"
import store from '../src/Redux/Store'
import { Auth0Provider } from '@auth0/auth0-react'
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <Auth0Provider
                    domain="dev-sdz9neh5.us.auth0.com"
                    clientId="DPRjT3o3kpePBHXnNlm1zkQAk5B7ywHc"
                    redirectUri={window.location.origin}
                    audicence="this is a unique identifier"
                    scope="openid profile email"
                >
                    <App />
                </Auth0Provider>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
