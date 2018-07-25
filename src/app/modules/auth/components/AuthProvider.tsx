import * as React from 'react';
import { registerForAuthStateChanges } from '../api';
import { IUserInfo } from '../types';
import { toUserInfo } from '../util';

export interface IAuthContext {
  userInfo: IUserInfo | null;
  subscribedForAuthChanges: boolean;
}

const defaultAuthContext = {
  userInfo: null,
  subscribedForAuthChanges: false,
};

export const AuthContext = React.createContext<IAuthContext>(defaultAuthContext);

export class AuthProvider extends React.Component<{}, IAuthContext> {

  state: IAuthContext = defaultAuthContext;

  private _authStateUnsubscribe: firebase.Unsubscribe | undefined;

  render() {
    const { children } = this.props;
    return (
      <AuthContext.Provider value={this.state} >
        {children}
      </AuthContext.Provider >
    );
  }

  componentDidMount() {
    this._authStateUnsubscribe = registerForAuthStateChanges(fbUser => {
      const userInfo: IUserInfo | null = fbUser ? toUserInfo(fbUser) : null;
      this.setState(() => ({ userInfo, subscribedForAuthChanges: true }));
    });
  }

  componentWillUnmount() {
    if (this._authStateUnsubscribe) {
      this._authStateUnsubscribe();
    }
  }
}
