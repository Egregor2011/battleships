import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app/App.js';
import userState from './app/reducers/index.js';


let store = createStore(userState);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
        <Component/>
    </Provider>,
    document.getElementById('root')
  );
};

render(App);

