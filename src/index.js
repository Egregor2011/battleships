import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/App.js';

const render = (Component) => {
  ReactDOM.render(
    <Component/>,
    document.getElementById('root')
  );
};

render(App);

