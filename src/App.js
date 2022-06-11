import React from 'react';
import IndexRouter from "./router/IndexRouter";
import './App.css'
import {store, persistor} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import {Provider} from "react-redux";

function App() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <IndexRouter/>
            </PersistGate>
        </Provider>
    );
}

export default App;
