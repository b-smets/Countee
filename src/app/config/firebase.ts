import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL, FIREBASE_PROJECT_ID } from '../config/constants';

// WORKAORUND: https://github.com/firebase/firebase-js-sdk/issues/283
const originalSend = XMLHttpRequest.prototype.send;
XMLHttpRequest.prototype.send = function(body: any) {
  if (body === '') {
    originalSend.call(this);
  } else {
    originalSend.call(this, body);
  }
};

const config = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
};

firebase.initializeApp(config);

export default firebase;
