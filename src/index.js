import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {Main} from "./components/main/main";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
        <React.StrictMode>
            <Main/>
        </React.StrictMode>
    </Provider>
);
