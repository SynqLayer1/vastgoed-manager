export default function PropHome() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      <nav className="border-b border-slate-800 bg-slate-900/80 backdrop-blur sticky top-0 z-50 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-xl flex items-center justify-center font-black text-white shadow-lg shadow-purple-600/30 text-lg">
            P
          </div>
          <div>
            <h1 className="font-bold text-base tracking-tight text-white">PropLease AI</h1>
            <p className="text-xs text-slate-400">AI huurindexering & contract management</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className="text-xs px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20 font-mono flex items-center gap-1.5">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            Vastgoed Beheer • Live
          </span>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12 w-full flex-1 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="p-8 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-white tracking-tight">Huurindexering & Contract Scanner</h2>
              <p className="text-slate-400 text-sm">Beheer vastgoedportefeuilles en automatiseer huurverhogingen volgens de wet.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-950 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Rendement Voordeel</p>
                <p className="text-4xl font-black text-emerald-400">€ 7.200</p>
                <p className="text-xs text-slate-500 mt-1">Gemiddeld per portefeuille</p>
              </div>
              <div className="p-6 bg-slate-950 rounded-xl border border-slate-800">
                <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Actieve Eenheden</p>
                <p className="text-4xl font-black text-purple-400">142</p>
                <p className="text-xs text-slate-500 mt-1">Real-time indexering</p>
              </div>
            </div>

            <div className="p-6 bg-slate-950 rounded-xl border border-slate-800 space-y-4">
              <h3 className="font-bold text-white text-sm">Contract / Adres Zoeken</h3>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Voer adres of pand ID in..."
                  className="flex-1 px-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500"
                />
                <button className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold text-sm rounded-xl transition shadow-lg shadow-purple-600/30">
                  Analyseren
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl space-y-4">
            <h3 className="font-bold text-white text-sm">Server & DB</h3>
            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-emerald-400 space-y-2">
              <p>STATUS: ONLINE</p>
              <p>POCKETBASE: v0.22.20</p>
              <p>HOST IP: 100.88.156.58:8095</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
