import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Boliger() {
  const [homes, setHomes] = useState([]);

  useEffect(() => {
    const fetchHomes = async () => {
      const colRef = collection(db, "homes");
      const snapshot = await getDocs(colRef);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setHomes(data);
    };
    fetchHomes();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">Boliger til salg</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {homes.map(home => (
          <div key={home.id} className="bg-white rounded-xl shadow p-4">
            <img
              src={home.imageUrl}
              alt={home.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-lg font-semibold">{home.title}</h2>
            <p className="text-sm text-gray-500">{home.city}, {home.zip}</p>
            <p className="text-sm">Type: {home.type}</p>
            <p className="text-sm">Areal: {home.size} m² • {home.rooms} værelser</p>
            <p className="text-sm font-bold mt-1">{home.price}</p>
            <a
              href={home.link}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline mt-2 inline-block"
            >
              Se bolig
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
