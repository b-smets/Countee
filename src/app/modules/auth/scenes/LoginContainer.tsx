import * as React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';
import { Login } from './Login';

export const LoginContainer = connect(undefined, { login })(Login);
