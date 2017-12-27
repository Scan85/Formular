import React from 'react';
import { Button, Form, Grid, Message } from 'semantic-ui-react';
import { LoginInput } from './component/LoginInput';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      error: false
    };
    this.onUserNameBlur = this.onUserNameBlur.bind(this);
    this.onPasswordBlur = this.onPasswordBlur.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onUserNameBlur(event) {
    if(event.target.value && event.target.value.length > 0) {
      this.setState({userName: event.target.value, error: false});
    } else {
      this.setState({error: true});
    }
  }
  onPasswordBlur(event) {
    if(event.target.value && event.target.value.length > 0) {
      this.setState({password: event.target.value, error: false});
    } else {
      this.setState({error: true});
    }
  }
  onSubmit() {
    if (this.state.password && this.state.userName) {
      this.setState({error: false});
      return;
    }
    this.setState({error: true});
  }
  render() {
    let errorMessage = this.state.error;
    return (
      <div style={{height: '100%'}}>
        <Grid textAlign={'center'} style={{ height: '100%' }} verticalAlign={'middle'}>
          <Grid.Column style={{ maxWidth: 450, minWidth: 300 }}>
            <Form className='ui large form' onSubmit={this.onSubmit}>
              <div className='ui stacked segment'>
                <LoginInput setValue={this.onUserNameBlur} label='Benutzername' icon='user' type='text' />
                <LoginInput setValue={this.onPasswordBlur} label='Password' icon='lock' type='password' />
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
