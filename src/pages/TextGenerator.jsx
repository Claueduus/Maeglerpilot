import { useState } from "react";

export default function TextGenerator() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");

  const generateText = () => {
    if (!prompt) return;
    setOutput(`✅ Forslag:
Denne bolig ligger fantastisk placeret og tilbyder et stilrent interiør, god energi og masser af lysindfald. Ideel til både børnefamilier og seniorer.`);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Tekstgenerator</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="F.eks. 'Skriv en annonce til en villa i Aarhus'"
        className="w-full p-2 bg-slate-700 text-white rounded"
      />
      <button
        onClick={generateText}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        Generér tekst
      </button>

      {output && (
        <div className="bg-slate-800 p-4 mt-4 rounded">
          <p>{output}</p>
        </div>
      )}
    </div>
  );
}
