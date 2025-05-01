import { useEffect, useState } from "react";

export default function Dashboard() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const gemt = localStorage.getItem("leads");
    if (gemt) setLeads(JSON.parse(gemt));
  }, []);

  const total = leads.length;
  const aktive = leads.filter((l) => l.status === "Aktiv").length;
  const kontaktet = leads.filter((l) => l.status === "Kontaktet").length;
  const slettet = leads.filter((l) => l.status === "Slettet").length;

  // Dummy konverteringsrate (fx % kontaktet / total)
  const konvRate =
    total > 0 ? ((kontaktet / total) * 100).toFixed(1) + "%" : "0%";

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Stat label="Totalt antal leads" value={total} />
        <Stat label="Aktive leads" value={aktive} />
        <Stat label="Kontaktet" value={kontaktet} />
        <Stat label="Slettet" value={slettet} />
        <Stat label="Konverteringsrate" value={konvRate} />
      </div>
    </div>
  );
}

function Stat({ label, value }) {
  return (
    <div className="bg-slate-800 p-4 rounded shadow text-center">
      <p className="text-sm text-gray-400">{label}</p>
      <p className="text-2xl font-bold text-white mt-1">{value}</p>
    </div>
  );
}
