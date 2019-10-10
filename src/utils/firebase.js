import * as firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDSXn_Bdco1SOBWePEKhir-PEXiQCGjDQw',
  authDomain: 'smart-home-stt-pln.firebaseapp.com',
  databaseURL: 'https://smart-home-stt-pln.firebaseio.com',
  projectId: 'smart-home-stt-pln',
  storageBucket: 'smart-home-stt-pln.appspot.com',
  messagingSenderId: '1052535627890',
  appId: '1:1052535627890:web:5edc91124723d2a81a22eb'
};

firebase.initializeApp(firebaseConfig);

export default firebase;
