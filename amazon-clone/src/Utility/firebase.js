// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
// import {firebasAut} from 'firebase/auth'
import {getAuth} from 'firebase/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAE0lO2bttYtyH8ueUa2vzqZBO4B8cKfS8",
  authDomain: "clone-3488e.firebaseapp.com",
  projectId: "clone-3488e",
  storageBucket: "clone-3488e.firebasestorage.app",
  messagingSenderId: "418215640075",
  appId: "1:418215640075:web:6e87d606299800c950db0e"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=app.firestore()







