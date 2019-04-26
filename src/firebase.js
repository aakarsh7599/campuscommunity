import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

  var config = {
    apiKey: "AIzaSyALmWpEWipGfSvwiKdqEPiTmG5LvA6TNP4",
    authDomain: "theme-d9f5f.firebaseapp.com",
    databaseURL: "https://theme-d9f5f.firebaseio.com",
    projectId: "theme-d9f5f",
    storageBucket: "theme-d9f5f.appspot.com",
    messagingSenderId: "282610902417"
  };
  firebase.initializeApp(config);

export default firebase;
