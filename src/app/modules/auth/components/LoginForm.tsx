import { Button, Form, Input, Item, Label, Text } from 'native-base';
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { View } from 'react-native';

export interface IProps {
  onLogin: (email: string, password: string) => void;
}

export interface IState {
  email: string;
  password: string;
}

export class LoginForm extends React.Component<IProps, IState> {

  state: IState = {
    email: '',
    password: '',
  };

  private _passwordInput: React.RefObject<Input> = React.createRef<Input>();

  render() {
    return (
      <View>
        <Form style={{ marginBottom: 50 }}>
          <Item>
            <Label><FormattedMessage id='module.auth.loginform.label.email' /></Label>
            <Input
              onChangeText={email => this.setState(() => ({ email }))}
              onSubmitEditing={this.focusPassword}
              autoFocus
            />
          </Item>
          <Item>
            <Label><FormattedMessage id='module.auth.loginform.label.password' /></Label>
            <Input
              onChangeText={password => this.setState(() => ({ password }))}
              secureTextEntry={true}
              ref={this._passwordInput}
              onSubmitEditing={this.performLogin} />
          </Item>
        </Form>
        <FormattedMessage id='module.auth.loginform.button.login'>
          {
            message => (
              <Button
                full
                disabled={!this.canLogin()}
                onPress={this.performLogin}
                textStyle={{ textTransform: 'uppercase' }}>
                <Text>{message}</Text>
              </Button>
            )
          }
        </FormattedMessage>
      </View >
    );
  }

  private focusPassword = () => {
    if (this._passwordInput.current) {
      (this._passwordInput.current as any)._root.focus();
    }
  }

  private canLogin() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  private performLogin = () => {
    if (this.canLogin()) {
      this.props.onLogin(this.state.email, this.state.password);
    }
  }
}
