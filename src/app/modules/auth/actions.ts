import { AsyncStorage } from 'react-native';
import { Dispatch } from 'redux';
import { IStoreLayout } from '../../redux';
import * as api from './api';
import { retrieveUser } from './storage';
import { IUser } from './types';

export const login = (email: string, password: string, callback: (user?: IUser, error?: Error) => void) =>
  (dispatch: Dispatch<IStoreLayout>) =>
    api.login(email, password)
      .then(user => {
        dispatch(loginSuccess(user));
        callback(user);
      })
      .catch(error => {
        callback(undefined, error);
      });

export const logout = (callback: (error?: Error) => void) =>
  (dispatch: Dispatch<IStoreLayout>) =>
    api.logout()
      .then(() => {
        dispatch(logoutSuccess());
        callback();
      })
      .catch(error => callback(error));

export const monitorAuthStatus = (authStatusHandler: (loggedIn: boolean) => void) =>
  (dispatch: Dispatch<IStoreLayout>) =>
    api.monitorAuthStatus(loggedIn => {
      if (loggedIn) {
        retrieveUser()
          .then(user => {
            dispatch(loginSuccess(user));
            authStatusHandler(true);
          })
          .catch(error => authStatusHandler(false));
      } else {
        dispatch(logoutSuccess());
        authStatusHandler(loggedIn);
      }
    });

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const loginSuccess = (user: IUser) => ({
  type: LOGIN_SUCCESS,
  user,
});

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});
