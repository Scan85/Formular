import 'babel-polyfill'
import 'semantic-ui-css/semantic.min.css'
import AccountOverview from './views/AccountOverview'
import About from './views/About'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const css = require('./css/app.css')

ReactDOM.render(
  <Router>
    <div>
      <ul className='navlist'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
      </ul>
      <hr />
      <Route exact path='/' component={AccountOverview} />
      <Route path='/about' component={About} />
    </div>
  </Router>,
  document.getElementById('app')
)
