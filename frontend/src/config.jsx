// src/config.jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA5tapX0qe1zMkhzLiEIvcOpOlEzabPhi0",
  authDomain: "casa-aura.firebaseapp.com",
  projectId: "casa-aura",
  storageBucket: "casa-aura.appspot.com",
  messagingSenderId: "1031705215295",
  appId: "1:1031705215295:web:81d5860e6db6290242538a",
  measurementId: "G-PJ2GBF98Q7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
