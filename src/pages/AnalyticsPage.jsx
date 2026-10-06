import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const questions = [
  { day: 'Mon', value: 70 },
  { day: 'Tue', value: 96 },
  { day: 'Wed', value: 82 },
  { day: 'Thu', value: 118 },
  { day: 'Fri', value: 126 },
  { day: 'Sat', value: 135 },
  { day: 'Sun', value: 142 },
];

const modules = [
  { name: 'auth', value: 42 },
  { name: 'api', value: 31 },
  { name: 'ui', value: 24 },
  { name: 'db', value: 12 },
];

const accuracy = [{ value: 92, color: '#2563eb' }, { value: 8, color: '#7c3aed' }];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Analytics</p>
        <h1 className="font-display text-3xl font-semibold">Track adoption and quality</h1>
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <div className="glass p-6">
          <h2 className="font-semibold text-white">Questions per day</h2>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={questions}>
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#06b6d4" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass p-6">
          <h2 className="font-semibold text-white">Most searched modules</h2>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={modules}>
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Bar dataKey="value" radius={[8, 8, 0, 0]} fill="#7c3aed" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="glass p-6">
          <h2 className="font-semibold text-white">Repository size growth</h2>
          <div className="mt-4 h-64 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-6">
            <p className="text-4xl font-semibold text-white">84.2 GB</p>
            <p className="mt-2 text-sm text-slate-400">Indexed across 5 repositories</p>
          </div>
        </div>
        <div className="glass p-6">
          <h2 className="font-semibold text-white">AI response accuracy</h2>
          <div className="mt-4 h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={accuracy} dataKey="value" innerRadius={58} outerRadius={90} paddingAngle={4}>
                  <Cell fill="#2563eb" />
                  <Cell fill="#7c3aed" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
