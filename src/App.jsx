import { Link, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Leads from "./pages/Leads";
import Economy from "./pages/Economy";
import TextGenerator from "./pages/TextGenerator";
import Rapporter from "./pages/Rapporter";
import Segmenter from "./pages/Segmenter";
import Dataimport from "./pages/Dataimport";
import GuidedTour from "./pages/GuidedTour";
import Indstillinger from "./pages/Indstillinger";
import Oekonomioversigt from "./pages/Oekonomioversigt";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <nav className="bg-slate-800 px-6 py-4 flex flex-wrap gap-4 justify-center shadow">
        <Link to="/" className="hover:underline">Dashboard</Link>
        <Link to="/leads" className="hover:underline">Leads</Link>
        <Link to="/economy" className="hover:underline">Økonomi</Link>
        <Link to="/textgenerator" className="hover:underline">Tekstgenerator</Link>
        <Link to="/rapporter" className="hover:underline">Rapporter</Link>
        <Link to="/segmenter" className="hover:underline">Segmenter</Link>
        <Link to="/dataimport" className="hover:underline">Dataimport</Link>
        <Link to="/guidedtour" className="hover:underline">Guided Tour</Link>
        <Link to="/indstillinger" className="hover:underline">Indstillinger</Link>
        <Link to="/oekonomioversigt" className="hover:underline">Økonomioversigt</Link>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leads" element={<Leads />} />
          <Route path="/economy" element={<Economy />} />
          <Route path="/textgenerator" element={<TextGenerator />} />
          <Route path="/rapporter" element={<Rapporter />} />
          <Route path="/segmenter" element={<Segmenter />} />
          <Route path="/dataimport" element={<Dataimport />} />
          <Route path="/guidedtour" element={<GuidedTour />} />
          <Route path="/indstillinger" element={<Indstillinger />} />
          <Route path="/oekonomioversigt" element={<Oekonomioversigt />} />
        </Routes>
      </main>
    </div>
  );
}
