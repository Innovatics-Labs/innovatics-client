// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDbAuc2ICAZfcY_d5SWLoxBoNafhsANn8",
  authDomain: "innovatics-cef94.firebaseapp.com",
  projectId: "innovatics-cef94",
  storageBucket: "innovatics-cef94.appspot.com",
  messagingSenderId: "914796251720",
  appId: "1:914796251720:web:3a902f6f659d050e12667d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
export const auth = getAuth(app);
