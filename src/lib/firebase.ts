import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCtSsSrONLB2z-CLLxe2ZSWsv07GzKZwTM",
  authDomain: "batman-portfolio.firebaseapp.com",
  projectId: "batman-portfolio",
  storageBucket: "batman-portfolio.firebasestorage.app",
  messagingSenderId: "8898404058",
  appId: "1:8898404058:web:a75e90698eea2f37c90fe3",
  measurementId: "G-NJ3SBGG81T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
