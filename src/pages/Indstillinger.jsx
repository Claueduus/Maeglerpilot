import { useState } from "react";

export default function Indstillinger() {
  const [notifikationer, setNotifikationer] = useState(true);
  const [tema, setTema] = useState("mørk");

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Indstillinger</h2>

      <div className="bg-slate-800 p-4 rounded space-y-4">
        <div>
          <label className="block mb-2">Tema</label>
          <select
            value={tema}
            onChange={(e) => setTema(e.target.value)}
            className="bg-slate-700 p-2 rounded w-full text-white"
          >
            <option value="mørk">Mørk</option>
            <option value="lys">Lys</option>
          </select>
        </div>

        <div>
          <label className="block mb-2">Notifikationer</label>
          <input
            type="checkbox"
            checked={notifikationer}
            onChange={() => setNotifikationer(!notifikationer)}
          />{" "}
          Aktiver push-beskeder
        </div>
      </div>
    </div>
  );
}
