import { useState } from "react";

export default function Economy() {
  const [cost, setCost] = useState("");
  const [revenue, setRevenue] = useState("");

  const calculateROI = () => {
    if (!cost || !revenue) return 0;
    return (((revenue - cost) / cost) * 100).toFixed(2);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Økonomi-simulator</h2>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-slate-800 p-4 rounded-lg shadow space-y-2">
          <label className="block">Annoncekroner (DKK)</label>
          <input
            type="number"
            value={cost}
            onChange={(e) => setCost(Number(e.target.value))}
            className="w-full p-2 bg-slate-700 rounded text-white"
          />

          <label className="block mt-2">Indtjening (DKK)</label>
          <input
            type="number"
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
            className="w-full p-2 bg-slate-700 rounded text-white"
          />
        </div>

        <div className="bg-slate-800 p-4 rounded-lg shadow flex flex-col justify-center items-center">
          <p className="text-lg text-gray-300">Beregn ROI</p>
          <p className="text-4xl font-bold text-green-400 mt-2">{calculateROI()}%</p>
        </div>
      </div>
    </div>
  );
}
