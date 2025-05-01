import { useEffect, useState } from "react";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({
    navn: "",
    email: "",
    telefon: "",
    status: "Aktiv",
    note: "",
  });

  // Load fra localStorage
  useEffect(() => {
    const gemt = localStorage.getItem("leads");
    if (gemt) setLeads(JSON.parse(gemt));
  }, []);

  // Gem til localStorage
  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leads));
  }, [leads]);

  const tilføjLead = () => {
    if (!form.navn || !form.email) return;
    setLeads([...leads, form]);
    setForm({ navn: "", email: "", telefon: "", status: "Aktiv", note: "" });
  };

  const sletLead = (index) => {
    const nyListe = [...leads];
    nyListe.splice(index, 1);
    setLeads(nyListe);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Leads – CRM-visning</h2>

      {/* Formular */}
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Navn"
          value={form.navn}
          onChange={(e) => setForm({ ...form, navn: e.target.value })}
          className="bg-slate-700 p-2 rounded text-white"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="bg-slate-700 p-2 rounded text-white"
        />
        <input
          type="tel"
          placeholder="Telefon"
          value={form.telefon}
          onChange={(e) => setForm({ ...form, telefon: e.target.value })}
          className="bg-slate-700 p-2 rounded text-white"
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="bg-slate-700 p-2 rounded text-white"
        >
          <option>Aktiv</option>
          <option>Kontaktet</option>
          <option>Slettet</option>
        </select>
        <textarea
          placeholder="Bemærkninger"
          value={form.note}
          onChange={(e) => setForm({ ...form, note: e.target.value })}
          className="bg-slate-700 p-2 rounded text-white md:col-span-2"
        />
      </div>

      <button
        onClick={tilføjLead}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        + Opret lead
      </button>

      {/* Liste */}
      <div className="grid gap-4 mt-4">
        {leads.length === 0 && (
          <p className="text-gray-400">Ingen leads endnu...</p>
        )}
        {leads.map((lead, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded shadow space-y-1"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">{lead.navn}</h3>
              <span className="text-sm text-gray-300 italic">{lead.status}</span>
            </div>
            <p className="text-sm">📧 {lead.email}</p>
            <p className="text-sm">📞 {lead.telefon}</p>
            {lead.note && (
              <p className="text-sm text-gray-300 mt-2">📝 {lead.note}</p>
            )}
            <button
              onClick={() => sletLead(index)}
              className="mt-2 text-red-400 hover:underline text-sm"
            >
              Slet
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
