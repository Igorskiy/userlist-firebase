import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app';

var firebaseConfig = {
    apiKey: "AIzaSyC4OJ8G4-CN4RCwKHPTe32UR2i8kxvpq5g",
    authDomain: "userlistapp-test.firebaseapp.com",
    databaseURL: "https://userlistapp-test.firebaseio.com",
    projectId: "userlistapp-test",      
    storageBucket: "userlistapp-test.appspot.com",
    messagingSenderId: "102863790993",
    appId: "1:102863790993:web:41b152851507623482f030"
  };

  firebase.initializeApp(firebaseConfig);
  export const userRef = firebase.database().ref().child('users');

ReactDOM.render(<App />, document.getElementById('root'));
