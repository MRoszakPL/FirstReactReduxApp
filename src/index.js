import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import reducers from './reducers';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware = applyMiddleware()(createStore);


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Index />
    </Provider>
    , document.querySelector('#root'));