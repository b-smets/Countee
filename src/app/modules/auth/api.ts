import firebase from '../../config/firebase';

const auth = firebase.auth();

export const login = (email: string, password: string) =>
  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      if (!userCredential.user) {
        throw new Error('Login failed: No associated user');
      }
      return userCredential.user;
    });

export const logout = () => auth.signOut();

export const registerForAuthStateChanges = (authStateChangeHandler: (user: firebase.User | null) => void) =>
  auth.onAuthStateChanged(authStateChangeHandler);
