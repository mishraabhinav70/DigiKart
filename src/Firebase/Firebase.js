// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAt_yVCXkCNXCotLOFj7LIdJ91fvR8N7Gs",
  authDomain: "digikart-acbc5.firebaseapp.com",
  projectId: "digikart-acbc5",
  storageBucket: "digikart-acbc5.firebasestorage.app",
  messagingSenderId: "832634762852",
  appId: "1:832634762852:web:41551cfacd9d9c76d65171",
  measurementId: "G-4EFPMBQ4ZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {app,auth,db}

