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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // If there is a userAuth object, query inside firestore for the document to see if it already exists in database.

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  // If user does not exist, create a new user with these properties.
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userRef;
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
