// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-216e2.firebaseapp.com",
  projectId: "mern-auth-216e2",
  storageBucket: "mern-auth-216e2.appspot.com",
  messagingSenderId: "240839878684",
  appId: "1:240839878684:web:cb58aa1051d88a27da17d9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);