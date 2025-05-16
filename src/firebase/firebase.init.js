import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDQNkpGqBnRftQT-rJrMVASkWGKgLwZXH0",
  authDomain: "coffee-house-app-771c4.firebaseapp.com",
  projectId: "coffee-house-app-771c4",
  storageBucket: "coffee-house-app-771c4.firebasestorage.app",
  messagingSenderId: "273650875693",
  appId: "1:273650875693:web:237762b276722fc5c667a4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);