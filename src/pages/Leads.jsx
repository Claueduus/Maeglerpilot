import { useEffect, useState } from "react";

export default function Leads() {
  const [leads, setLeads] = useState([]);
  const [form, setForm] = useState({
    navn: "",
    email: "",
    telefon: "",
    status: "Aktiv",
    note: "",
    kommentarer: [],
  });
  const [editingIndex, setEditingIndex] = useState(null);
  const [nyKommentar, setNyKommentar] = useState({});

  useEffect(() => {
    const gemt = localStorage.getItem("leads");
    if (gemt) setLeads(JSON.parse(gemt));
  }, []);

  useEffect(() => {
    localStorage.setItem("leads", JSON.stringify(leads));
  }, [leads]);

  const tilføjEllerOpdater = () => {
    if (!form.navn || !form.email) return;

    const nyLead = {
      ...form,
      kommentarer: form.kommentarer || [],
    };

    const opdateret = [...leads];
    if (editingIndex !== null) {
      opdateret[editingIndex] = nyLead;
      setEditingIndex(null);
    } else {
      opdateret.push(nyLead);
    }

    setLeads(opdateret);
    setForm({
      navn: "",
      email: "",
      telefon: "",
      status: "Aktiv",
      note: "",
      kommentarer: [],
    });
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

  const tilføjKommentar = (index) => {
    if (!nyKommentar[index]) return;

    const opdateretLeads = [...leads];
    const kommentarObj = {
      tekst: nyKommentar[index],
      tidspunkt: new Date().toLocaleString(),
    };
    opdateretLeads[index].kommentarer = [
      ...(opdateretLeads[index].kommentarer || []),
      kommentarObj,
    ];
    setLeads(opdateretLeads);
    setNyKommentar({ ...nyKommentar, [index]: "" });
  };

  const eksportérCSV = () => {
    const headers = ["Navn", "Email", "Telefon", "Status", "Bemærkninger", "Kommentarer"];
    const rows = leads.map((lead) => [
      lead.navn,
      lead.email,
      lead.telefon,
      lead.status,
      lead.note,
      lead.kommentarer?.map(k => `${k.tidspunkt}: ${k.tekst}`).join(" | ") || ""
    ]);

    const csv = [headers, ...rows]
      .map((row) => row.map((v) => `"${v}"`).join(","))
      .join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "leads.csv";
    link.click();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Leads – CRM med Kommentar & Eksport</h2>

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

      <div className="flex gap-2">
        <button
          onClick={tilføjEllerOpdater}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
        >
          {editingIndex !== null ? "💾 Gem ændringer" : "+ Opret lead"}
        </button>
        <button
          onClick={eksportérCSV}
          className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          ⬇️ Eksportér CSV
        </button>
      </div>

      <div className="grid gap-4 mt-6">
        {leads.map((lead, index) => (
          <div
            key={index}
            className="bg-slate-800 p-4 rounded shadow space-y-2"
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
              <p className="text-sm text-gray-300">📝 {lead.note}</p>
            )}

            {lead.kommentarer?.length > 0 && (
              <div className="bg-slate-900 p-2 rounded mt-2 space-y-1">
                {lead.kommentarer.map((k, i) => (
                  <p key={i} className="text-sm text-gray-400">
                    🗒️ {k.tidspunkt}: {k.tekst}
                  </p>
                ))}
              </div>
            )}

            <div className="flex gap-2 mt-2">
              <input
                type="text"
                value={nyKommentar[index] || ""}
                onChange={(e) =>
                  setNyKommentar({ ...nyKommentar, [index]: e.target.value })
                }
                placeholder="Tilføj kommentar..."
                className="bg-slate-700 p-1 rounded text-sm text-white flex-1"
              />
              <button
                onClick={() => tilføjKommentar(index)}
                className="text-sm bg-green-600 hover:bg-green-700 px-3 py-1 rounded"
              >
                Tilføj
              </button>
            </div>

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
