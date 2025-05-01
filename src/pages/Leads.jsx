import { useEffect, useState } from "react";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [navn, setNavn] = useState("");
  const [kontakt, setKontakt] = useState("");

  // Indlæs fra localStorage
  useEffect(() => {
    const gemte = localStorage.getItem("leads");
    if (gemte) {
      setLeads(JSON.parse(gemte));
    }
  }, []);

  // Gem til localStorage
  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leads));
  }, [leads]);

  const tilføjLead = () => {
    if (!navn || !kontakt) return;
    const nytLead = { navn, kontakt, status: "Aktiv" };
    setLeads([...leads, nytLead]);
    setNavn("");
    setKontakt("");
  };

  const sletLead = (index) => {
    const nye = [...leads];
    nye.splice(index, 1);
    setLeads(nye);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Leads</h2>

      <div className="grid md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Navn"
          value={navn}
          onChange={(e) => setNavn(e.target.value)}
          className="bg-slate-700 text-white p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={kontakt}
          onChange={(e) => setKontakt(e.target.value)}
          className="bg-slate-700 text-white p-2 rounded"
        />
        <button
          onClick={tilføjLead}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          + Tilføj lead
        </button>
      </div>

      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-slate-800 rounded-md">
          <thead className="bg-slate-700 text-left">
            <tr>
              <th className="p-2">Navn</th>
              <th className="p-2">Kontakt</th>
              <th className="p-2">Handling</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="border-t border-slate-600">
                <td className="p-2">{lead.navn}</td>
                <td className="p-2">{lead.kontakt}</td>
                <td className="p-2">
                  <button
                    onClick={() => sletLead(index)}
                    className="text-red-400 hover:underline"
                  >
                    Slet
                  </button>
                </td>
              </tr>
            ))}
            {leads.length === 0 && (
              <tr>
                <td colSpan="3" className="p-4 text-center text-gray-400">
                  Ingen leads endnu...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
