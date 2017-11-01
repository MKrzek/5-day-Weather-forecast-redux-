import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import App from './components/App.jsx';
import reducers from './reducers';

const createStoreWithMiddleware=applyMiddleware(ReduxPromise)(createStore);

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(reducers)}>
        <App/> 
        </Provider>
        , document.querySelector('#app'));
})