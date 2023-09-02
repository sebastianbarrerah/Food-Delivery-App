// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbFVhDOxX_aFvSk3JBYCUGK5dQBSQ5EZ8",
  authDomain: "deliveryfood-f1620.firebaseapp.com",
  projectId: "deliveryfood-f1620",
  storageBucket: "deliveryfood-f1620.appspot.com",
  messagingSenderId: "144142854716",
  appId: "1:144142854716:web:954836fcf7f65854c2b139"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
