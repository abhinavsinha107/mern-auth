// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-6880f.firebaseapp.com",
  projectId: "mern-auth-6880f",
  storageBucket: "mern-auth-6880f.appspot.com",
  messagingSenderId: "201524946210",
  appId: "1:201524946210:web:c38b8e3c647ba97c4bf17b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
