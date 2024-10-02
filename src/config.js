// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgtXsK-seNZ0zeoedi9FWm6rdJ--i78jE",
  authDomain: "auht-lesson.firebaseapp.com",
  projectId: "auht-lesson",
  storageBucket: "auht-lesson.appspot.com",
  messagingSenderId: "179290165103",
  appId: "1:179290165103:web:319135338a75d06a90a29a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}
