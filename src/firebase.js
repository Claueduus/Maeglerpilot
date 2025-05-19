import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjOny1RCN1PJK9-2bT4-K0cAzAXUkaI4M",
  authDomain: "maelgerpilot.firebaseapp.com",
  projectId: "maelgerpilot",
  storageBucket: "maelgerpilot.firebasestorage.app",
  messagingSenderId: "1039101910426",
  appId: "1:1039101910426:web:2b479f6f15cadce4a62e23"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
