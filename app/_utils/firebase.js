// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlBJBAjJJ5xodgtC-V64S7p1Wn1UcGqas",
  authDomain: "webjournal-34740.firebaseapp.com",
  projectId: "webjournal-34740",
  storageBucket: "webjournal-34740.appspot.com",
  messagingSenderId: "771363801967",
  appId: "1:771363801967:web:25a78dcd5ed7c55e5a769a",
  measurementId: "G-FKBDD0CQC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);