import React from 'react';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import LoginInput from './component/LoginInput';
import { connect } from 'react-redux';
import actions from '../../actions/login/loginAction';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      error: false
    };
    this.onUserUpdate = this.onUserUpdate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUserUpdate(field, event) {
    if (field === 'userName') {
      if (event.target.value && event.target.value.length > 0) {
        this.setState({
          userName: event.target.value,
          error: false
        });
        return;
      }
      this.setState({
        userName: event.target.value,
        error: true
      });
      return;
    }
    if (field === 'password') {
      if (event.target.value && event.target.value.length > 0) {
        this.setState({
          password: event.target.value,
          error: false
        });
        return;
      }
      this.setState({
        password: event.target.value,
        error: true
      });
    }
  }
  onSubmit() {
    if (this.state.password && this.state.password.length > 0 &&
      this.state.userName && this.state.userName.length > 0) {
      this.setState({ error: false });
      const user = {
        username: this.state.userName,
        password: this.state.password
      };
      this.props.createUser(user);
      return;
    }
    this.setState({ error: true });
  }
  render() {
    let errorMessage = this.state.error;
    return (
      <div style={{ height: '100%' }}>
        <Grid textAlign={'center'} style={{ height: '100%' }} verticalAlign={'middle'}>
          <Grid.Column style={{ maxWidth: 450, minWidth: 300 }}>
            <Form className='ui large form' onSubmit={this.onSubmit}>
              <div className='ui stacked segment'>
                <LoginInput setValue={this.onUserUpdate} id='userName' label='Benutzername' icon='user' type='text' />
                <LoginInput setValue={this.onUserUpdate} id='password' label='Password' icon='lock' type='password' />
                { errorMessage ? <Message error visible header='Authentifizierung Fehlgeschlagen'
                  content='Bitte geben Sie einen gültigen Benuternamen und/oder Passwort ein.' /> : null }
                <Button type='submit' color='teal' fluid size='large'>Login</Button>
              </div>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

const stateToProps = (state) => {
  return {
    user: state
  };
};
const dispatchToProps = (dispatch) => {
  return {
    createUser: (user) => dispatch(actions.createUser(user))
  };
};
export default connect(stateToProps, dispatchToProps)(Login);
