import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './app/App';
import userState from './app/reducers/index';


const store = createStore(userState);

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
        <Component/>
    </Provider>,
    document.getElementById('root'),
  );
};

render(App);

