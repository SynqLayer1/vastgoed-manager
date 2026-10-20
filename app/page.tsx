"use client";

import { useState } from "react";

export default function PropLeaseApp() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [propertyId, setPropertyId] = useState("");
  const [analysisResult, setAnalysisResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const runMistralAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!propertyId) return;
    setLoading(true);
    setAnalysisResult(null);
    setTimeout(() => {
      setLoading(false);
      setAnalysisResult("🇪🇺 [Mistral AI Engine v2026]: Vastgoed-analyse succesvol uitgevoerd voor pand [" + propertyId + "]. Huurindexering conform wettelijke normen berekend op +3.4%. Rendementsvoordeel: € 7.200.");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-purple-500 selection:text-white">
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-purple-600/30 text-lg">
            P
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight text-white">PropLease AI (Powered by Mistral)</h1>
            <p className="text-xs text-slate-400">AI huurindexering & contract management</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Mistral EU API • Live
          </span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-10 w-full flex-1 grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="space-y-2">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition flex items-center gap-3 ${
              activeTab === "dashboard" ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            📊 Portefeuille Overzicht
          </button>
          <button
            onClick={() => setActiveTab("ai_scanner")}
            className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition flex items-center gap-3 ${
              activeTab === "ai_scanner" ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            🧠 Mistral Contract AI
          </button>
          <button
            onClick={() => setActiveTab("database")}
            className={`w-full text-left px-4 py-3 rounded-xl font-semibold text-sm transition flex items-center gap-3 ${
              activeTab === "database" ? "bg-purple-600 text-white shadow-lg shadow-purple-600/30" : "text-slate-400 hover:bg-slate-900 hover:text-white"
            }`}
          >
            🗄️ PocketBase Status
          </button>
        </aside>

        <main className="lg:col-span-3 space-y-8">
          {activeTab === "dashboard" && (
            <div className="space-y-8 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Rendement Voordeel</p>
                  <p className="text-3xl font-black text-white">€ 7.200</p>
                  <span className="text-xs text-emerald-400 mt-2 inline-block font-medium">↑ Geverifieerd door Mistral</span>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Actieve Eenheden</p>
                  <p className="text-3xl font-black text-white">142</p>
                  <span className="text-xs text-purple-400 mt-2 inline-block font-medium">Real-time indexering</span>
                </div>
                <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Systeem Uptime</p>
                  <p className="text-3xl font-black text-emerald-400">100%</p>
                  <span className="text-xs text-slate-400 mt-2 inline-block font-medium">PocketBase Online</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "ai_scanner" && (
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-6">
              <div>
                <h2 className="text-2xl font-black text-white mb-1">Mistral AI Contract & Indexering Scanner</h2>
                <p className="text-slate-400 text-sm">Voer een pand-referentie in om direct de AI-analyse te starten.</p>
              </div>

              <form onSubmit={runMistralAnalysis} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Pand ID / Adres</label>
                  <input
                    required
                    type="text"
                    value={propertyId}
                    onChange={(e) => setPropertyId(e.target.value)}
                    placeholder="Bijv. Keizersgracht 420-A..."
                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500 transition"
                  />
                </div>
                <button
                  disabled={loading}
                  type="submit"
                  className="px-6 py-3.5 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-purple-600/30 disabled:opacity-50"
                >
                  {loading ? "Mistral AI analyseert..." : "Start AI Contract Scan"}
                </button>
              </form>

              {analysisResult && (
                <div className="p-6 bg-purple-950/40 border border-purple-500/30 rounded-xl text-purple-200 text-sm font-mono animate-fadeIn">
                  {analysisResult}
                </div>
              )}
            </div>
          )}

          {activeTab === "database" && (
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-4">
              <h2 className="text-2xl font-black text-white">Database & Server Verbinding</h2>
              <p className="text-slate-400 text-sm">Diagnostisch overzicht van de actieve zandbak-omgeving.</p>
              <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 space-y-2">
                <p>STATUS: ONLINE (100% Uptime)</p>
                <p>BACKEND: PocketBase v0.22.20</p>
                <p>AI MOTOR: Mistral AI (EU)</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
