import { Container, Content, Toast } from 'native-base';
import * as React from 'react';
import { InjectedIntlProps, injectIntl } from 'react-intl';
import { NavigationScreenProp } from 'react-navigation';
import { login } from '../api';
import { LoginForm } from '../components/LoginForm';
import { persistUser } from '../storage';
import { toUserInfo } from '../util';

export interface IProps extends InjectedIntlProps {
  navigation: NavigationScreenProp<any>;
}

export class LoginWrapped extends React.Component<IProps> {

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ justifyContent: 'center', flex: 1 }}>
          <LoginForm onLogin={this.doLogin} />
        </Content>
      </Container>
    );
  }

  private doLogin = (email: string, password: string) => {
    const { intl, navigation } = this.props;
    login(email, password)
      .then(user => persistUser(toUserInfo(user)))
      .then(() => navigation.navigate('App'))
      .catch(() => Toast.show({
        text: intl.formatMessage({ id: 'scene.login.error.loginfailed' }),
        type: 'danger',
        position: 'bottom',
      }));
  }
}

export const Login = injectIntl(LoginWrapped);
