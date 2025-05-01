import { useState } from "react";

export default function Segmenter() {
  const [type, setType] = useState("Villa");
  const [budget, setBudget] = useState("3.000.000");

  const genererSegment = () => {
    alert(`Segment genereret: ${type} med budget på ${budget}`);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Segmenter</h2>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-slate-800 p-4 rounded space-y-2">
          <label className="block">Foretrukken boligtype</label>
          <select
            className="w-full bg-slate-700 text-white p-2 rounded"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option>Villa</option>
            <option>Lejlighed</option>
            <option>Rækkehus</option>
          </select>

          <label className="block mt-2">Budget</label>
          <input
            type="text"
            className="w-full bg-slate-700 text-white p-2 rounded"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
          />

          <button
            onClick={genererSegment}
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mt-4"
          >
            Generér segment
          </button>
        </div>
      </div>
    </div>
  );
}
