// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore,doc,setDoc } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCaCk1iXz8O73WwK3SX-fVIJQoutxowSY",
  authDomain: "finance-tracker-d0edc.firebaseapp.com",
  projectId: "finance-tracker-d0edc",
  storageBucket: "finance-tracker-d0edc.firebasestorage.app",
  messagingSenderId: "956429204613",
  appId: "1:956429204613:web:983d26b7e2d45ca8fc3dec",
  measurementId: "G-C3JK0ENKXK"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); /*adding for this authntication */ 
const db = getFirestore(app);/**/
const provider = new GoogleAuthProvider(); 
export {db,auth,provider,doc,setDoc } ;




