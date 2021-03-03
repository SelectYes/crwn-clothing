// init firebase

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-pZfqq7zdzAbGCke9fg4eynaLReRr-ZI",
  authDomain: "crwn-db-c3b8e.firebaseapp.com",
  projectId: "crwn-db-c3b8e",
  storageBucket: "crwn-db-c3b8e.appspot.com",
  messagingSenderId: "661868546460",
  appId: "1:661868546460:web:ec51b641b8a128e656a059",
  measurementId: "G-X5E6PRT6GT",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// google authentication setup

var provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
