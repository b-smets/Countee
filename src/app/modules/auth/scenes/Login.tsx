import { Body, Container, Content, Form, Header, Title } from 'native-base';
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { LoginForm } from '../components/LoginForm';
import { persistUser } from '../storage';
import { IUser } from '../types';

export interface IProps {
  navigation: NavigationScreenProp<any>;
  login: (email: string, password: string, callback: (user?: IUser, error?: Error) => void) => any;
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
    this.props.login(email, password, this.onComplete);
  }

  private onComplete = (user?: IUser, error?: Error) => {
    if (user == null || error) {
      console.error('Login failed: ', error);
      return;
    }
    persistUser(user).then(() => this.props.navigation.navigate('Home'));
  }
}
