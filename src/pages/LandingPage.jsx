import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, BrainCircuit, Search, ShieldCheck, Zap, Github, MessagesSquare, ChevronRight, Users, Cpu, Workflow, Bot, BookText, FolderOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const features = [
  { icon: FolderOpen, title: 'Repository Parsing', description: 'Ingest codebases and understand architecture instantly.' },
  { icon: BrainCircuit, title: 'AI Code Assistant', description: 'Ask questions in natural language and receive grounded answers.' },
  { icon: Workflow, title: 'RAG', description: 'Use retrieval-augmented generation over your own documentation.' },
  { icon: Search, title: 'Natural Language Search', description: 'Find functions, classes, and modules with ease.' },
  { icon: ShieldCheck, title: 'Secure Knowledge Base', description: 'Keep your private repositories protected and searchable.' },
  { icon: Zap, title: 'Instant Answers', description: 'Get precise, contextual answers in seconds.' },
];

const steps = [
  'Upload GitHub Repository',
  'Parse Source Code',
  'Build Knowledge Base',
  'Ask Questions & Get AI Answers',
];

const team = [
  { name: 'Maya Chen', role: 'Founder & CEO' },
  { name: 'Darius Rivera', role: 'Head of AI' },
  { name: 'Nina Patel', role: 'Platform Engineer' },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 p-2.5"><Bot size={20} /></div>
          <div>
            <p className="font-display font-semibold">CodeMentor AI</p>
            <p className="text-xs text-slate-400">Intelligent onboarding agent</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/login" className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">Login</Link>
          <Link to="/register" className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2 text-sm font-semibold text-white">Get Started</Link>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-8 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300">
              <Sparkles size={15} /> New: AI onboarding for large-scale engineering teams
            </div>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              AI-Powered Intelligent Onboarding Agent for Large Codebases
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-slate-400">
              Understand any codebase in minutes using AI. Turn repositories into searchable, explainable knowledge.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/login" className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-3 font-semibold text-white transition hover:scale-[1.02]">Get Started</Link>
              <a href="#features" className="rounded-full border border-white/10 px-6 py-3 font-semibold text-slate-300 transition hover:bg-white/5">Learn More</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2"><Cpu size={16} /> 100+ repos indexed</div>
              <div className="flex items-center gap-2"><MessagesSquare size={16} /> 24/7 AI support</div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="glass grid-pattern relative overflow-hidden p-6">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10" />
            <div className="relative space-y-4">
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-blue-500/20 p-2"><BookText size={18} className="text-blue-300" /></div>
                  <div>
                    <p className="font-semibold">Repository Explorer</p>
                    <p className="text-sm text-slate-400">Architecture overview and dependency maps</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-violet-500/20 p-2"><BrainCircuit size={18} className="text-violet-300" /></div>
                  <div>
                    <p className="font-semibold">Ask CodeMentor</p>
                    <p className="text-sm text-slate-400">“How does auth work?”</p>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">Response quality</p>
                  <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs text-emerald-300">97.2%</span>
                </div>
                <div className="mt-4 h-2 rounded-full bg-slate-800">
                  <div className="h-2 w-[97%] rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="features" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Core capabilities</p>
              <h2 className="mt-2 font-display text-3xl font-semibold">Everything your team needs to onboard faster</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <motion.div whileHover={{ y: -4, scale: 1.01 }} className="glass p-6" key={title}>
                <div className="inline-flex rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3">
                  <Icon size={20} className="text-cyan-300" />
                </div>
                <h3 className="mt-4 font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">{description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">How it works</p>
          <h2 className="mt-2 font-display text-3xl font-semibold">From repository to trusted answers in 4 steps</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step} className="glass p-6">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-sm font-semibold">0{index + 1}</div>
                <p className="text-lg font-semibold">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="glass p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Why teams love it</p>
                <h2 className="mt-2 font-display text-3xl font-semibold">Accelerate onboarding and reduce support overhead</h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {['Reduce ramp-up time by 70%', 'Get answers in plain English', 'Keep documentation synced with the code', 'Improve developer productivity from day one'].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">{item}</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Meet the team</p>
              <h2 className="mt-2 font-display text-3xl font-semibold">Built for modern engineering organizations</h2>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {team.map((person) => (
              <div key={person.name} className="glass p-6 text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 text-xl font-semibold">{person.name.split(' ').map((n) => n[0]).join('')}</div>
                <h3 className="mt-4 font-semibold">{person.name}</h3>
                <p className="mt-1 text-sm text-slate-400">{person.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-7xl border-t border-white/10 px-6 py-8 text-sm text-slate-400 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CodeMentor AI. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 hover:bg-white/5"><Github size={16} /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 hover:bg-white/5"><Users size={16} /></a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 p-2 hover:bg-white/5"><ChevronRight size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
