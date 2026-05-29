import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXthjAlN5UJNg_J74OzJlVdLzYD2pLZ3s",
  authDomain: "dslf-debsirin.firebaseapp.com",
  projectId: "dslf-debsirin",
  storageBucket: "dslf-debsirin.firebasestorage.app",
  messagingSenderId: "238361792162",
  appId: "1:238361792162:web:52b14fc03976eb2ad751fb",
  measurementId: "G-L5KKM0VSW2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);