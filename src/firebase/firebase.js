import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCB3qcjOdbaLEtzavTKSBjINTdgMJ8HMPY",
  authDomain: "veg-shop-1b37f.firebaseapp.com",
  projectId: "veg-shop-1b37f",
  storageBucket: "veg-shop-1b37f.appspot.com",
  messagingSenderId: "838683448580",
  appId: "1:838683448580:web:971549c45211ccc79e6c51",
  measurementId: "G-9F69SZ08WG",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// INITIAL SETUP COMPLETED

// PROVIDER

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
