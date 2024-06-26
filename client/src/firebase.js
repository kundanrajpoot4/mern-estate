// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-96a87.firebaseapp.com",
  projectId: "mern-estate-96a87",
  storageBucket: "mern-estate-96a87.appspot.com",
  messagingSenderId: "1025029611255",
  appId: "1:1025029611255:web:de3e8271e68226dbcd3df2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
