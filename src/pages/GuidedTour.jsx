import { useState } from "react";

export default function GuidedTour() {
  const steps = [
    "Velkommen til MæglerPilot!",
    "Naviger mellem moduler via topmenuen",
    "Tilføj leads og følg dem i realtid",
    "Beregn din ROI og optimer din markedsføring",
    "Generér tekst og rapporter med ét klik"
  ];
  const [step, setStep] = useState(0);

  const næste = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Guided Tour</h2>
      <div className="bg-slate-800 p-6 rounded shadow space-y-2">
        <p className="text-lg">{steps[step]}</p>
        {step < steps.length - 1 ? (
          <button
            onClick={næste}
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
          >
            Næste →
          </button>
        ) : (
          <p className="text-green-400 mt-4">🎉 Tour gennemført!</p>
        )}
      </div>
    </div>
  );
}
