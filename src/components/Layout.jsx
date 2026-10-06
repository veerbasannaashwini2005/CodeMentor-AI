import { NavLink, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Bot, Home, BookOpen, History, Upload, MessageCircleMore, Settings, LogOut, Search, Bell, UserCircle2, Menu } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: Home },
  { to: '/upload', label: 'Upload Repository', icon: Upload },
  { to: '/chat', label: 'Chat Assistant', icon: MessageCircleMore },
  { to: '/docs', label: 'Documentation', icon: BookOpen },
  { to: '/history', label: 'History', icon: History },
  { to: '/settings', label: 'Settings', icon: Settings },
];

export default function Layout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex">
        <aside className="hidden lg:flex w-72 flex-col border-r border-white/10 bg-slate-950/80 p-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 p-2.5">
              <Bot size={20} />
            </div>
            <div>
              <p className="font-display font-semibold">CodeMentor AI</p>
              <p className="text-xs text-slate-400">Onboarding Copilot</p>
            </div>
          </div>
          <nav className="space-y-2">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 transition ${isActive ? 'bg-gradient-to-r from-blue-600/30 to-violet-600/30 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`}>
                <Icon size={18} />
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>
          <div className="mt-auto rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-4">
            <p className="text-sm font-semibold">Need a hand?</p>
            <p className="mt-1 text-sm text-slate-400">Ask your AI assistant anything about the repo.</p>
          </div>
        </aside>

        <div className="flex-1">
          <header className="border-b border-white/10 bg-slate-950/70 px-4 py-4 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="rounded-2xl border border-white/10 bg-white/5 p-2 lg:hidden" onClick={() => setOpen(!open)}>
                  <Menu size={18} />
                </button>
                <div>
                  <p className="font-display font-semibold">Project Aurora</p>
                  <p className="text-xs text-slate-400">Repository intelligence workspace</p>
                </div>
              </div>
              <div className="hidden md:flex flex-1 max-w-xl items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5">
                <Search size={16} className="text-slate-400" />
                <input placeholder="Search modules, docs, answers" className="w-full bg-transparent outline-none" />
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-2xl border border-white/10 bg-white/5 p-2.5"><Bell size={18} /></button>
                <button className="rounded-2xl border border-white/10 bg-white/5 p-2.5"><UserCircle2 size={18} /></button>
              </div>
            </div>
            {open && (
              <div className="mt-4 space-y-2 lg:hidden">
                {navItems.map(({ to, label, icon: Icon }) => (
                  <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-4 py-3 transition ${isActive ? 'bg-gradient-to-r from-blue-600/30 to-violet-600/30 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'}`} onClick={() => setOpen(false)}>
                    <Icon size={18} />
                    <span>{label}</span>
                  </NavLink>
                ))}
              </div>
            )}
          </header>

          <main className="p-4 lg:p-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
