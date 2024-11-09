// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "royal-estate-49fc9.firebaseapp.com",
  projectId: "royal-estate-49fc9",
  storageBucket: "royal-estate-49fc9.firebasestorage.app",
  messagingSenderId: "975121049369",
  appId: "1:975121049369:web:61317e60af1b0b95758788",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
