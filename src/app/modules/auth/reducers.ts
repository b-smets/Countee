import { Reducer } from 'redux';
import { LOGIN_SUCCESS, LOGOUT_SUCCESS } from './actions';
import { IUser } from './types';

export const reducer: Reducer<IUser | null> = (state = null, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return action.user;
    }
    case LOGOUT_SUCCESS: {
      return null;
    }
    default: {
      return state;
    }
  }
};
