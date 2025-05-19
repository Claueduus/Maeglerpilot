import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Boliger from "./components/Boliger";
import Leads from "./pages/Leads";
import Economy from "./pages/Economy";
import TextGenerator from "./pages/TextGenerator";
import Rapporter from "./pages/Rapporter";
import Segmenter from "./pages/Segmenter";
import Dataimport from "./pages/Dataimport";
import GuidedTour from "./pages/GuidedTour";
import Indstillinger from "./pages/Indstillinger";
import Oekonomioversigt from "./pages/Oekonomioversigt";
import Login from "./Login";

export default function App() {
  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <div className="min-h-screen bg-slate-900 p-8 text-white">
        <Login onUserChange={setUser} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans">
      <Router>
        <nav className="bg-slate-800 px-6 py-4 flex flex-wrap gap-4 justify-center shadow">
          <a href="/">Dashboard</a>
          <a href="/leads">Leads</a>
          <a href="/economy">Økonomi</a>
          <a href="/textgenerator">Tekstgenerator</a>
          <a href="/rapporter">Rapporter</a>
          <a href="/segmenter">Segmenter</a>
          <a href="/dataimport">Dataimport</a>
          <a href="/guidedtour">Guided Tour</a>
          <a href="/indstillinger">Indstillinger</a>
          <a href="/oekonomioversigt">Økonomioversigt</a>
        </nav>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/boliger" element={<Boliger />} />
            <Route path="/leads" element={<Leads />} />
            <Route path="/economy" element={<Economy />} />
            <Route path="/textgenerator" element={<TextGenerator />} />
            <Route path="/rapporter" element={<Rapporter />} />
            <Route path="/segmenter" element={<Segmenter />} />
            <Route path="/dataimport" element={<Dataimport />} />
            <Route path="/guidedtour" element={<GuidedTour />} />
            <Route path="/indstillinger" element={<Indstillinger />} />
            <Route path="/oekonomioversigt" element={<Oekonomioversigt />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}
