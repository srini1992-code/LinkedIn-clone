// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC2L4J32jPp4Vks5TIpgEnQ7esDTFOOJUc',
  authDomain: 'linkedin-clone-50c96.firebaseapp.com',
  projectId: 'linkedin-clone-50c96',
  storageBucket: 'linkedin-clone-50c96.appspot.com',
  messagingSenderId: '47211908552',
  appId: '1:47211908552:web:0adcfede57a76a1b53c4fd',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
