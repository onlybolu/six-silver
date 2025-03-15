// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTrOY3I3Ko1Fhon3XDoB4uDBl49I3ihhc",
  authDomain: "my-ecommerce-fd60c.firebaseapp.com",
  projectId: "my-ecommerce-fd60c",
  storageBucket: "my-ecommerce-fd60c.firebasestorage.app",
  messagingSenderId: "160154003576",
  appId: "1:160154003576:web:af8849c5688c8a8691e58d",
  measurementId: "G-RF588268VE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};