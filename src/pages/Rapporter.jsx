import { useState } from "react";

export default function Rapporter() {
  const [genereret, setGenereret] = useState(false);

  const genererRapport = () => {
    setGenereret(true);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Rapporter</h2>

      <button
        onClick={genererRapport}
        className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
      >
        Generér rapport
      </button>

      {genereret && (
        <div className="bg-slate-800 p-4 rounded mt-4 space-y-2">
          <p><strong>Lead-kilde:</strong> Facebook</p>
          <p><strong>Konverteringsrate:</strong> 24%</p>
          <p><strong>ROI:</strong> 320%</p>
          <p><strong>Oprettet:</strong> 01.05.2025</p>
        </div>
      )}
    </div>
  );
}
