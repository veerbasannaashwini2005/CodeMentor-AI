import { Search, Filter, Eye, Sparkles } from 'lucide-react';

const docs = [
  { title: 'Functions', count: '24', description: 'Core utilities and handlers' },
  { title: 'Classes', count: '12', description: 'Service and model abstractions' },
  { title: 'Modules', count: '9', description: 'Domain-specific packages' },
  { title: 'Dependencies', count: '31', description: 'Third-party libraries and SDKs' },
];

export default function DocumentationPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Documentation hub</p>
          <h1 className="font-display text-3xl font-semibold">Searchable project knowledge</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"><Search size={15} /> Search</div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300"><Filter size={15} /> Filter</div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {docs.map((card) => (
          <div key={card.title} className="glass p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{card.title}</p>
                <p className="mt-2 text-3xl font-semibold text-white">{card.count}</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3"><Sparkles size={18} className="text-cyan-300" /></div>
            </div>
            <p className="mt-4 text-sm text-slate-400">{card.description}</p>
            <div className="mt-6 flex items-center gap-3">
              <button className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">View Details</button>
              <button className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white">Open</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
