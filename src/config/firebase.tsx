// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKHwR4iyTfjNdqJwCNEQcIrpSyomSdbVA",
  authDomain: "audio-tek.firebaseapp.com",
  projectId: "audio-tek",
  storageBucket: "audio-tek.appspot.com",
  messagingSenderId: "151382597529",
  appId: "1:151382597529:web:92dba3f01bb611c7187d08",
  measurementId: "G-XGTET115MV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);