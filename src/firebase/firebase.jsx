// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCK60Vr2Dk0D_NkjL5vNTa5pIu-uddGelA",
  authDomain: "authentication-e8187.firebaseapp.com",
  projectId: "authentication-e8187",
  storageBucket: "authentication-e8187.appspot.com",
  messagingSenderId: "654449438354",
  appId: "1:654449438354:web:5d6bd276596668f2d8c04b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
