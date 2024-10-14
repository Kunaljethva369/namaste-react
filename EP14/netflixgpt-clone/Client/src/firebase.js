import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGo6nCJ3qKXC2pJqy67FdYHav7_2HdwkA",
  authDomain: "netflixgpt-90c03.firebaseapp.com",
  projectId: "netflixgpt-90c03",
  storageBucket: "netflixgpt-90c03.appspot.com",
  messagingSenderId: "1021964864852",
  appId: "1:1021964864852:web:e737c95cd6f1633dcb4cc1",
  measurementId: "G-EW8174BJ0H"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);