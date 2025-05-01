import { useState } from "react";

export default function Dataimport() {
  const [filnavn, setFilnavn] = useState(null);
  const [importeret, setImporteret] = useState(false);

  const håndterFilvalg = (e) => {
    const valgt = e.target.files[0];
    setFilnavn(valgt?.name);
    setImporteret(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Dataimport</h2>

      <input
        type="file"
        onChange={håndterFilvalg}
        className="file:bg-blue-600 file:text-white file:rounded file:px-4 file:py-2 bg-slate-800 p-2 rounded text-white"
      />

      {importeret && filnavn && (
        <div className="mt-4 bg-slate-800 p-4 rounded shadow">
          ✅ <strong>{filnavn}</strong> er importeret korrekt!
        </div>
      )}
    </div>
  );
}
