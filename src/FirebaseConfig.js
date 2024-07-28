// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaZ-Udfcj4BvtNIdwxnKBma3TCSnNDwfE",
  authDomain: "angell-76b86.firebaseapp.com",
  projectId: "angell-76b86",
  storageBucket: "angell-76b86.appspot.com",
  messagingSenderId: "133797925800",
  appId: "1:133797925800:web:0386b6707c48888d7cc39d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bd = getFirestore(app);

export default {
  app,bd
}