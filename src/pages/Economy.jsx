import { useState } from "react";

export default function Economy() {
  const [omkostning, setOmkostning] = useState("");
  const [indtjening, setIndtjening] = useState("");

  const beregnROI = () => {
    const cost = parseFloat(omkostning);
    const revenue = parseFloat(indtjening);

    if (!cost || isNaN(cost) || cost <= 0) return "0%";
    if (!revenue || isNaN(revenue)) return "0%";

    const roi = ((revenue - cost) / cost) * 100;
    return `${roi.toFixed(2)}%`;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Økonomi-simulator</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-800 p-4 rounded space-y-4">
          <div>
            <label className="block mb-1">Annoncekroner (DKK)</label>
            <input
              type="number"
              value={omkostning}
              onChange={(e) => setOmkostning(e.target.value)}
              className="w-full bg-slate-700 p-2 rounded text-white"
            />
          </div>

          <div>
            <label className="block mb-1">Indtjening (DKK)</label>
            <input
              type="number"
              value={indtjening}
              onChange={(e) => setIndtjening(e.target.value)}
              className="w-full bg-slate-700 p-2 rounded text-white"
            />
          </div>
        </div>

        <div className="bg-slate-800 p-4 rounded flex flex-col justify-center items-center">
          <p className="text-lg text-gray-400">Beregnet ROI</p>
          <p className="text-4xl font-bold text-green-400 mt-2">{beregnROI()}</p>
        </div>
      </div>
    </div>
  );
}
