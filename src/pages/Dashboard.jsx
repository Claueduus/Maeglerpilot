export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-400">Aktive leads</p>
          <p className="text-2xl font-bold">210</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-400">Konverteringsrate</p>
          <p className="text-2xl font-bold">20%</p>
        </div>
        <div className="bg-slate-800 p-4 rounded-lg shadow">
          <p className="text-sm text-gray-400">Forventet indtjening</p>
          <p className="text-2xl font-bold">50.000 DKK</p>
        </div>
      </div>
    </div>
  );
}
