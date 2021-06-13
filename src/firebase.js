
import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAQjEquIUanuEu83yU_Ac4PnEpYk46s7lo",
    authDomain: "todo-app-cp-7d89b.firebaseapp.com",
    projectId: "todo-app-cp-7d89b",
    storageBucket: "todo-app-cp-7d89b.appspot.com",
    messagingSenderId: "294640456450",
    appId: "1:294640456450:web:ca3fe2641eb36ccb21281b",
    measurementId: "G-8JWY9R1DBZ"
  });

  const db = firebaseApp.firestore();

  export default db;