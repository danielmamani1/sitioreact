// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpy60znsNCzghwo9YPX1Ml0yvKb-pmijU",
  authDomain: "my-app1-7f692.firebaseapp.com",
  projectId: "my-app1-7f692",
  storageBucket: "my-app1-7f692.appspot.com",
  messagingSenderId: "202762065917",
  appId: "1:202762065917:web:2138dc8b6fb829b95a6b94",
  measurementId: "G-2NE18PKXDJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);