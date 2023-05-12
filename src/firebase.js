// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsTrtZOa7a3B_awNZeHws-q_laZWvj9o8",
  authDomain: "react-ls.firebaseapp.com",
  projectId: "react-ls",
  storageBucket: "react-ls.appspot.com",
  messagingSenderId: "857071607024",
  appId: "1:857071607024:web:dec3518f0032d345213635",
  measurementId: "G-ZRM39N3RHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)