// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwMp1TePPbQUNxxZ0c498kZUX1uKdTFaE",
  authDomain: "netflixgpt-a5a86.firebaseapp.com",
  projectId: "netflixgpt-a5a86",
  storageBucket: "netflixgpt-a5a86.appspot.com",
  messagingSenderId: "769208871877",
  appId: "1:769208871877:web:0955e419e1d44e279eb9ac",
  measurementId: "G-FF5FJFRVXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);