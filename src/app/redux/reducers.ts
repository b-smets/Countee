import { combineReducers } from 'redux';
import { IUser, user } from '../modules/auth';

export interface IStoreLayout {
  user: IUser;
}

export const root = combineReducers({ user });
