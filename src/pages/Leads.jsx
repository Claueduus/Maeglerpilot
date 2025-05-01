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
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    const gemt = localStorage.getItem("leads");
    if (gemt) setLeads(JSON.parse(gemt));
  }, []);

  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leads));
  }, [leads]);

  const tilføjEllerOpdater = () => {
    if (!form.navn || !form.email) return;

    const opdateret = [...leads];
    if (editingIndex !== null) {
      opdateret[editingIndex] = form;
      setEditingIndex(null);
    } else {
      opdateret.push(form);
    }

    setLeads(opdateret);
    setForm({ navn: "", email: "", telefon: "", status: "Aktiv", note: "" });
  };

  const sletLead = (index) => {
    const nyListe = [...leads];
    nyListe.splice(index, 1);
    setLeads(nyListe);
    setEditingIndex(null);
  };

  const redigerLead = (index) => {
    setForm(leads[index]);
    setEditingIndex(index);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Leads – CRM-visning m. redigering</h2>

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
        onClick={tilføjEllerOpdater}
        className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
      >
        {editingIndex !== null ? "💾 Gem ændringer" : "+ Opret lead"}
      </button>

      <div className="grid gap-4 mt-6">
        {leads.map((lead, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded shadow space-y-1"
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold">{lead.navn}</h3>
              <span className="text-sm text-gray-300 italic">
                {lead.status}
              </span>
            </div>
            <p className="text-sm">📧 {lead.email}</p>
            <p className="text-sm">📞 {lead.telefon}</p>
            {lead.note && (
              <p className="text-sm text-gray-300 mt-2">📝 {lead.note}</p>
            )}
            <div className="flex gap-4 mt-2">
              <button
                onClick={() => redigerLead(index)}
                className="text-yellow-400 hover:underline text-sm"
              >
                ✏️ Rediger
              </button>
              <button
                onClick={() => sletLead(index)}
                className="text-red-400 hover:underline text-sm"
              >
                🗑️ Slet
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
