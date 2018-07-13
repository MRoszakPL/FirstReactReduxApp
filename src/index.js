import React from 'react';
import ReactDOM from 'react-dom';
import App from './weatherApp/components/index';
import reducers from './weatherApp/reducers/index';
import ReduxPromise from 'redux-promise';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
    </Provider>
    , document.querySelector('#root'));