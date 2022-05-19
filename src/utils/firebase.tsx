// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA96sL63eI8GzevcPuY1MpbpKc8ww7N220",
  authDomain: "todo-app-71346.firebaseapp.com",
  projectId: "todo-app-71346",
  storageBucket: "todo-app-71346.appspot.com",
  messagingSenderId: "886774775446",
  appId: "1:886774775446:web:9c2527e7836a64f70cccb7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)