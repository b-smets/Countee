import { Container, Content } from 'native-base';
import * as React from 'react';
import { NavigationScreenProp } from 'react-navigation';
import { login } from '../api';
import { LoginForm } from '../components/LoginForm';
import { persistUser } from '../storage';
import { IUserInfo } from '../types';
import { toUserInfo } from '../util';

export interface IProps {
  navigation: NavigationScreenProp<any>;
}

export class Login extends React.Component<IProps> {

  render() {
    return (
      <Container>
        <Content>
          <LoginForm onLogin={this.doLogin} />
        </Content>
      </Container>
    );
  }

  private doLogin = (email: string, password: string) => {
    login(email, password)
      .then(user => persistUser(toUserInfo(user)))
      .then(() => this.props.navigation.navigate('Home'))
      .catch(error => console.error('Login failed', error));
  }
}
