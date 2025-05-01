import { useState } from "react";

export default function TextGenerator() {
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateText = async () => {
    if (!prompt) return;
    setLoading(true);

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer sk-...`, // <- erstat dette med din nøgle midlertidigt
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 150,
        temperature: 0.7,
      }),
    });

    const data = await res.json();
    setOutput(data.choices?.[0]?.message?.content || "No response.");
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Tekstgenerator (AI)</h2>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="F.eks. Skriv en boligannonce til villa i Aarhus"
        className="w-full p-2 bg-slate-700 text-white rounded"
      />
      <button
        onClick={generateText}
        disabled={loading}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        {loading ? "Genererer..." : "Generér tekst"}
      </button>

      {output && (
        <div className="bg-slate-800 p-4 mt-4 rounded text-white whitespace-pre-wrap">
          {output}
        </div>
      )}
    </div>
  );
}
