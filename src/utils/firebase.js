// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBq5sceImREZTzDsq847jSVieAIVarpFqE",
  authDomain: "netfilxgpt-c0c80.firebaseapp.com",
  projectId: "netfilxgpt-c0c80",
  storageBucket: "netfilxgpt-c0c80.appspot.com",
  messagingSenderId: "208516505378",
  appId: "1:208516505378:web:a7c0b78a9e2a9021538f7b",
  measurementId: "G-FNTHP4GGNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth()