import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAv6wKi8ShaC6eio2g__tJ1M8DfovhuwEs',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://yfokus-47d9d-default-rtdb.firebaseio.com/',
  projectId: 'yfokus-47d9d',
  storageBucket: 'your-project-id-1234.appspot.com',
  messagingSenderId: '12345-insert-yourse',
  appId: 'insert yours: 1:1234:web:ee873bd1234c0deb7eba61ce',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };