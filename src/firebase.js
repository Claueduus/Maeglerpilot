import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjOny1RCN1PJK9-2bT4-K0cAzAXUKaI4M",
  authDomain: "maeglerpilot.firebaseapp.com",
  projectId: "maeglerpilot",
  storageBucket: "maeglerpilot.appspot.com",
  messagingSenderId: "1039101910426",
  appId: "1:1039101910426:web:2b479f6f15cadce4a62e23"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
