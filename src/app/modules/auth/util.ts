import firebase from '../../config/firebase';
import { IUserInfo } from './types';

export const toUserInfo = (firebaseUser: firebase.User): IUserInfo => ({
  email: firebaseUser.email as string,
  name: firebaseUser.displayName as string,
});
