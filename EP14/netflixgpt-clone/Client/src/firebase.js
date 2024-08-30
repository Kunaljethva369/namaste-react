// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxlmaO2XFN74FrUggSH4LEfod_Sv1TYI8",
  authDomain: "netflixgpt-5b256.firebaseapp.com",
  projectId: "netflixgpt-5b256",
  storageBucket: "netflixgpt-5b256.appspot.com",
  messagingSenderId: "918738188629",
  appId: "1:918738188629:web:4798709cf422dbd44bd7dc",
  measurementId: "G-R0KQL5VM3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);