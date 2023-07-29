// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYLI9emyrDc1ceJJbQKUkY5PFFhDrz0BU",
  authDomain: "react-study-back-end.firebaseapp.com",
  projectId: "react-study-back-end",
  storageBucket: "react-study-back-end.appspot.com",
  messagingSenderId: "619776135997",
  appId: "1:619776135997:web:086b5db7497016ead7eb54"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);