import { useState } from "react";

export default function Leads() {
  const [leads, setLeads] = useState([
    { navn: "Anders", kontakt: "anders@mail.dk", status: "Aktiv" },
    { navn: "Sara", kontakt: "sara@mail.dk", status: "Slettet" },
    { navn: "Mette", kontakt: "mette@mail.dk", status: "Redigeret" }
  ]);

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Leads</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-slate-800 rounded-md">
          <thead className="bg-slate-700 text-left">
            <tr>
              <th className="p-2">Navn</th>
              <th className="p-2">Kontakt</th>
              <th className="p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {leads.map((lead, index) => (
              <tr key={index} className="border-t border-slate-600">
                <td className="p-2">{lead.navn}</td>
                <td className="p-2">{lead.kontakt}</td>
                <td className="p-2">{lead.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
