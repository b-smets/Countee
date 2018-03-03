import firebase from '../../config/firebase';
import { IUser } from './types';

const auth = firebase.auth();
const store = firebase.firestore();

export interface IFirebaseUser {
  uid: string;
}

export const login = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password)
    .then(user => getUser(user));

export const logout = () => auth.signOut();

export const getUser = (user: IFirebaseUser) =>
  store.collection('users').doc(user.uid).get()
    .then(snapshot => {
      if (!snapshot.exists) {
        throw new Error('user not found');
      }
      return snapshot.data() as IUser;
    });

export const monitorAuthStatus = (authStatusHandler: (loggedIn: boolean) => void) =>
  auth.onAuthStateChanged((user: IFirebaseUser | null) => {
    authStatusHandler(user != null);
  });
