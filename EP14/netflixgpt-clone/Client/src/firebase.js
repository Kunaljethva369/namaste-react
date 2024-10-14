import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDQiBRTU5YXG-tEwmhRzTj4nbFRcCVR1Lg",
  authDomain: "netflixgpt-c5b87.firebaseapp.com",
  projectId: "netflixgpt-c5b87",
  storageBucket: "netflixgpt-c5b87.appspot.com",
  messagingSenderId: "571888470474",
  appId: "1:571888470474:web:9336a74d195a04c2c3a733"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);