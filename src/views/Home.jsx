import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import About from './footer/About';
import Login from './login/Login';
import Navigation from './navigation/Navigation';
import { connect } from 'react-redux';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: this.props.userStatus
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      this.setState({
        loginStatus: nextProps.userStatus
      });
    }
  }
  render() {
    return (
      <Router>
        <div style={{ height: '100%', backgroundColor: '#f7f7f7' }}>
          { this.props.userStatus ? <Navigation /> : null }
          <Route exact path='/' component={Login} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default connect((state) => {
  return {
    userFetching: state.user.fetching,
    userFetched: state.user.fetched,
    userStatus: state.user.loggedIn,
    error: state.user.error
  };
})(Home);
