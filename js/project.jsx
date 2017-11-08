import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import throttle from 'lodash/throttle';
import reducers from './reducers';
import App from './components/App.jsx';
import {loadState, saveState} from './LocalStorage.jsx';

const persistedState=loadState();
const store=createStore(
    reducers,
    persistedState,
    applyMiddleware(ReduxPromise)
);
store.subscribe(throttle(()=>{
    saveState(store.getState());
    
}, 1000));


document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
< Provider store = {store}>
        <App/> 
        </Provider>
        , document.querySelector('#app'));
})



