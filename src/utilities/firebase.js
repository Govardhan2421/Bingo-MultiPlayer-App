import firebase from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyCzMoDpMBQP4md7An-YICqx8GWm62wUYrE",
  authDomain: "bingo-multiplayer-app.firebaseapp.com",
  databaseURL: "https://bingo-multiplayer-app.firebaseio.com",
  projectId: "bingo-multiplayer-app",
  storageBucket: "bingo-multiplayer-app.appspot.com",
  messagingSenderId: "453787520562",
  appId: "1:453787520562:web:fe1ae9daaed7655127762b",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
