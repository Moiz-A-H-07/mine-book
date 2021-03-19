import firebase from 'firebase';
require('@firebase/firestore')

 var firebaseConfig = {
    apiKey: "AIzaSyB0cgILToRwaZFh9djkMXfURPHbL6kZ7s8",
    authDomain: "book-app-244a3.firebaseapp.com",
    projectId: "book-app-244a3",
    storageBucket: "book-app-244a3.appspot.com",
    messagingSenderId: "235780415645",
    appId: "1:235780415645:web:74a35845373dd9d6bfb474"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()