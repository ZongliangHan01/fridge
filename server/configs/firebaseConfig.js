import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB__UFdJoMEhe8BPY6lKEMzprNs63GSm70",
  authDomain: "fridge-3498f.firebaseapp.com",
  projectId: "fridge-3498f",
  storageBucket: "fridge-3498f.appspot.com",
  messagingSenderId: "220783809482",
  appId: "1:220783809482:web:877058ae0728628e22b533",
  measurementId: "G-9R3R3WVWJX"
};

const app = initializeApp(firebaseConfig);
console.log(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { 
  db, 
  auth 
};