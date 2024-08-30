import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCxlmaO2XFN74FrUggSH4LEfod_Sv1TYI8",
  authDomain: "netflixgpt-5b256.firebaseapp.com",
  projectId: "netflixgpt-5b256",
  storageBucket: "netflixgpt-5b256.appspot.com",
  messagingSenderId: "918738188629",
  appId: "1:918738188629:web:4798709cf422dbd44bd7dc",
  measurementId: "G-R0KQL5VM3M"
};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);