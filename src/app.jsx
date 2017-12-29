import 'babel-polyfill';
import 'semantic-ui-css/semantic.min.css';
import './css/app.css';
import Login from './views/login/Login';
import About from './views/footer/About';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './stores/store';
import Navigation from './views/navigation/Navigation';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <div style={{ height: '100%', backgroundColor: '#f7f7f7' }}>
        <Navigation />
        <Route exact path='/' component={Login} />
        <Route path='/about' component={About} />
      </div>
    </Provider>
  </Router>,
  document.getElementById('app')
);
