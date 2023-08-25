// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth" ; 

import { getFirestore } from "@firebase/firestore" ;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPMnN2yMQSzT5kEyJhzkWMzO-5NxgDlwY",
  authDomain: "dashboard-444ee.firebaseapp.com",
  projectId: "dashboard-444ee",
  storageBucket: "dashboard-444ee.appspot.com",
  messagingSenderId: "352695861185",
  appId: "1:352695861185:web:01d7b7dcbf8506187f7940"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

// Initialize Firebase Auth
export const auth = getAuth(app)  ;
 
// Fire Store
export const firestore = getFirestore(app) ;

export default app ; 