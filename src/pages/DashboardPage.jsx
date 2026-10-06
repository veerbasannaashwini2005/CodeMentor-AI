import { motion } from 'framer-motion';
import { FolderGit2, MessagesSquare, BookText, Sparkles, ChevronRight, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const stats = [
  { label: 'Total Repositories', value: '24', icon: FolderGit2 },
  { label: 'Questions Asked', value: '1.2k', icon: MessagesSquare },
  { label: 'Documents Indexed', value: '8.4k', icon: BookText },
  { label: 'AI Responses', value: '3.6k', icon: Sparkles },
];

const activity = [
  { day: 'Mon', questions: 80 },
  { day: 'Tue', questions: 110 },
  { day: 'Wed', questions: 95 },
  { day: 'Thu', questions: 140 },
  { day: 'Fri', questions: 125 },
  { day: 'Sat', questions: 180 },
  { day: 'Sun', questions: 160 },
];

const modules = [
  { name: 'auth', value: 38 },
  { name: 'api', value: 27 },
  { name: 'ui', value: 20 },
  { name: 'db', value: 15 },
];

const pie = [{ value: 68, color: '#2563eb' }, { value: 32, color: '#7c3aed' }];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Overview</p>
          <h1 className="font-display text-3xl font-semibold">Welcome back, Alex</h1>
        </div>
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">Live AI insights • 5 repositories synced</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }) => (
          <motion.div whileHover={{ y: -3 }} key={label} className="glass p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{label}</p>
                <p className="mt-2 text-3xl font-semibold text-white">{value}</p>
              </div>
              <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3"><Icon size={18} className="text-cyan-300" /></div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-6 xl:grid-cols-[1.3fr_0.7fr]">
        <div className="glass p-6">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Questions per day</p>
              <h2 className="font-semibold text-white">Engagement trend</h2>
            </div>
            <button className="text-sm text-cyan-300">View analytics</button>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={activity}>
                <XAxis dataKey="day" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip />
                <Line type="monotone" dataKey="questions" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="glass p-6">
          <p className="text-sm text-slate-400">Most searched modules</p>
          <div className="mt-6 h-64">
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

      <div className="grid gap-6 xl:grid-cols-[1fr_0.75fr]">
        <div className="glass p-6">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-semibold text-white">Recent activity</h2>
            <button className="text-sm text-cyan-300">See all</button>
          </div>
          <div className="space-y-3">
            {['Parsed “aurora-platform” repository', 'Answered 14 questions about auth flows', 'Indexed 1,200 docs for analytics service', 'Generated summary for onboarding guide'].map((item) => (
              <div key={item} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                <div className="flex items-center gap-3"><Activity size={16} className="text-cyan-300" />{item}</div>
                <ChevronRight size={16} className="text-slate-500" />
              </div>
            ))}
          </div>
        </div>
        <div className="glass p-6">
          <p className="text-sm text-slate-400">AI response accuracy</p>
          <div className="mt-4 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pie} dataKey="value" innerRadius={60} outerRadius={90} paddingAngle={4}>
                  <Cell fill="#2563eb" />
                  <Cell fill="#7c3aed" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
            <span>Overall confidence</span>
            <span className="font-semibold text-white">97.2%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
