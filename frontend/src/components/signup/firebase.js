// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDjt-CtMWewHtCfkrzvtm_9RYHoBcarqjE",
  authDomain: "weddingplan-ac4e3.firebaseapp.com",
  projectId: "weddingplan-ac4e3",
  storageBucket: "weddingplan-ac4e3.appspot.com",
  messagingSenderId: "1005337319207",
  appId: "1:1005337319207:web:c6ca04daa1c3aeb7263b02",
  measurementId: "G-4N3FC26R11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);