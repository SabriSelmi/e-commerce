import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config={
    apiKey: "AIzaSyBuSef0tBpGP6Ds8O2jELXHQetNn0fnFlk",
    authDomain: "e-commerce-8321e.firebaseapp.com",
    databaseURL: "https://e-commerce-8321e.firebaseio.com",
    projectId: "e-commerce-8321e",
    storageBucket: "e-commerce-8321e.appspot.com",
    messagingSenderId: "7692335772",
    appId: "1:7692335772:web:0f186b6f9edabd21e7cb59",
    measurementId: "G-VP1ZQJEDMM"
  };

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;