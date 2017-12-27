import 'babel-polyfill';
import 'semantic-ui-css/semantic.min.css';
import { Login } from './views/login/Login';
import About from './views/About';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { Navigation } from './views/navigation/Navigation';

const css = require('./css/app.css');

ReactDOM.render(
  <Router>
    <div style={{height: '100%'}}>
      <Navigation />
      <Route exact path='/' component={Login} />
      <Route path='/about' component={About} />
    </div>
  </Router>,
  document.getElementById('app')
);
