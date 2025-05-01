import { Link, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <nav className="bg-slate-800 px-6 py-4 flex justify-between items-center shadow">
        <h1 className="text-2xl font-bold">MæglerPilot</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Dashboard</Link>
          <Link to="/leads" className="hover:underline">Leads</Link>
          <Link to="/economy" className="hover:underline">Økonomi</Link>
        </div>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<h2 className="text-xl">Dashboard (kommer snart)</h2>} />
          <Route path="/leads" element={<h2 className="text-xl">Leads (kommer snart)</h2>} />
          <Route path="/economy" element={<h2 className="text-xl">Økonomi-simulator (kommer snart)</h2>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
