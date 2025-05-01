export default function Oekonomioversigt() {
  const statistik = [
    { label: "Totalt annonceret", værdi: "45.000 DKK" },
    { label: "Samlet indtjening", værdi: "195.000 DKK" },
    { label: "ROI", værdi: "333%" },
    { label: "Konverteringsrate", værdi: "18,5%" },
    { label: "Antal kampagner", værdi: "12" },
    { label: "Leads oprettet", værdi: "210" }
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Økonomioversigt</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {statistik.map((post, index) => (
          <div key={index} className="bg-slate-800 p-4 rounded shadow text-center">
            <p className="text-sm text-gray-400">{post.label}</p>
            <p className="text-xl font-bold">{post.værdi}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
