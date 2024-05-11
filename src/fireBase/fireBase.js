import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";



// ` This config is like a key to login in our firebase
const firebaseConfig = {
    apiKey: "AIzaSyDKM91ujNjH6KiYs_glEuhBZcgG8R5vecY",
    authDomain: "responsive-netflix-clone.firebaseapp.com",
    projectId: "responsive-netflix-clone",
    storageBucket: "responsive-netflix-clone.appspot.com",
    messagingSenderId: "229624207074",
    appId: "1:229624207074:web:39288d3c537237111af0bb"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig)

// ` To use fire base data base

const db = firebaseApp.firestore()

// ` To use fire base authentication service

const auth =  firebase.auth()

export { auth };
export default db;