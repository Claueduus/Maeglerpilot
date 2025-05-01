import { useState } from "react";
import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";

export default function Login({ onUserChange }) {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      onUserChange(u); // send brugerdata videre
    });
    return unsub;
  }, []);

  const handleLogin = async () => {
    try {
      if (isNew) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      alert("Login-fejl: " + error.message);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    setEmail("");
    setPassword("");
  };

  if (user) {
    return (
      <div className="p-4 bg-slate-800 rounded text-white">
        <p>✅ Logget ind som: <strong>{user.email}</strong></p>
        <button
          onClick={handleLogout}
          className="mt-2 bg-red-600 hover:bg-red-700 px-4 py-2 rounded"
        >
          Log ud
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4 bg-slate-800 p-4 rounded text-white">
      <h2 className="text-xl font-semibold">Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full p-2 bg-slate-700 rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Adgangskode"
        className="w-full p-2 bg-slate-700 rounded"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded w-full"
      >
        {isNew ? "Opret bruger" : "Log ind"}
      </button>
      <p
        onClick={() => setIsNew(!isNew)}
        className="text-sm text-blue-300 hover:underline cursor-pointer"
      >
        {isNew ? "Har du allerede en konto? Log ind" : "Ny bruger? Klik her"}
      </p>
    </div>
  );
}
