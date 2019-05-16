import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDdbMQbgqdo83FkG7-VV0Eefp4324Bwt5k",
  authDomain: "booty-track.firebaseapp.com",
  databaseURL: "https://booty-track.firebaseio.com",
  projectId: "booty-track",
  storageBucket: "booty-track.appspot.com",
  messagingSenderId: "422447061893",
  appId: "1:422447061893:web:8c92514c0db1e316"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()

export default db
