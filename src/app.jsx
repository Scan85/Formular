import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Link } from 'react-router-dom'

const css = require('./app.scss')

ReactDOM.render(
  <Router>
    <div>
      <ul className='navlist'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/topics'>Topics</Link></li>
      </ul>
      <hr />
    </div>
  </Router>,
  document.getElementById('app')
)
