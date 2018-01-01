import 'babel-polyfill';
import 'semantic-ui-css/semantic.min.css';
import './css/app.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import state from './stores/store';
import Home from './views/Home';

ReactDOM.render(
  <Provider store={state}>
    <Home/>
  </Provider>,
  document.getElementById('app')
);
