import React, { Component } from 'react';
import { Button, Container, Menu, Segment, Visibility } from 'semantic-ui-react';

export class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {visible: false};
    this.hideFixedMenu = this.hideFixedMenu.bind(this);
    this.showFixedMenu = this.showFixedMenu.bind(this);
  }
  hideFixedMenu() {
    this.setState({
      visible: false
    });
  }
  showFixedMenu() {
    this.setState({
      visible: true
    });
  }

  render() {
    const FixedMenu = () => (
      <Menu fixed='top' size='large'>
        <Container>
          <Menu.Item as='a' active>Home</Menu.Item>
          <Menu.Item as='a'>Kunden</Menu.Item>
          <Menu.Item as='a'>Waren</Menu.Item>
          <Menu.Item as='a'>Lager</Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item className='item'>
              <Button as='a'>Log in</Button>
            </Menu.Item>
            <Menu.Item>
              <Button as='a' primary>Sign Up</Button>
            </Menu.Item>
          </Menu.Menu>
        </Container>
      </Menu>
    );
    const {visible} = this.state;

    return (
      <div>
        {visible ? <FixedMenu/> : null}
        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{padding: '1em 0em'}}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item as='a' active>Home</Menu.Item>
                <Menu.Item as='a'>Kunden</Menu.Item>
                <Menu.Item as='a'>Waren</Menu.Item>
                <Menu.Item as='a'>Lager</Menu.Item>
                <Menu.Item position='right'>
                  <Button as='a' inverted>Log in</Button>
                  <Button as='a' inverted style={{marginLeft: '0.5em'}}>Sign Up</Button>
                </Menu.Item>
              </Menu>
            </Container>
          </Segment>
        </Visibility>
      </div>
    );
  }
}
