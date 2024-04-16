// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7oCm-2f7HDE-17ZZH6VdbtWKesqQqxmg",
  authDomain: "bloggingplatform-38194.firebaseapp.com",
  projectId: "bloggingplatform-38194",
  storageBucket: "bloggingplatform-38194.appspot.com",
  messagingSenderId: "1035296044545",
  appId: "1:1035296044545:web:513f1824540b66e3b4f200",
  measurementId: "G-V6VVMGFQNY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)