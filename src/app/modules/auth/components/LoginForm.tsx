import { Button, Form, Input, Item, Text } from 'native-base';
import * as React from 'react';
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
        <Form style={{ marginBottom: 10 }}>
          <Item>
            <Input placeholder='Email'
              onChangeText={email => this.setState(prevState => ({ email }))}
              onSubmitEditing={this.focusPassword} />
          </Item>
          <Item>
            <Input placeholder='Password' onChangeText={password => this.setState(prevState => ({ password }))}
              secureTextEntry={true} ref={this._passwordInput} onSubmitEditing={this.performLogin} />
          </Item>
        </Form>
        <Button full disabled={!this.canLogin()} onPress={this.performLogin}>
          <Text>Login</Text>
        </Button>
      </View>
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
