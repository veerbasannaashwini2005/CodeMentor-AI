import { Moon, Sun, Key, Shield, Bell, LogOut, UserCircle2 } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Settings</p>
        <h1 className="font-display text-3xl font-semibold">Personalize your workspace</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="glass p-6">
          <div className="flex items-center gap-3">
            <UserCircle2 size={22} className="text-cyan-300" />
            <h2 className="font-semibold text-white">Profile</h2>
          </div>
          <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-400">
            <p className="text-slate-300">Alex Morgan</p>
            <p className="mt-1">alex@codementor.ai</p>
          </div>
        </div>

        <div className="glass p-6">
          <div className="flex items-center gap-3">
            <Moon size={20} className="text-cyan-300" />
            <h2 className="font-semibold text-white">Theme</h2>
          </div>
          <div className="mt-4 flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
            <span>Dark mode is enabled</span>
            <button className="rounded-full bg-gradient-to-r from-blue-600 to-violet-600 p-2"><Sun size={16} /></button>
          </div>
        </div>

        <div className="glass p-6">
          <div className="flex items-center gap-3">
            <Key size={20} className="text-cyan-300" />
            <h2 className="font-semibold text-white">API Key</h2>
          </div>
          <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-400">
            <p>sk-cm-************</p>
          </div>
        </div>

        <div className="glass p-6">
          <div className="flex items-center gap-3">
            <Bell size={20} className="text-cyan-300" />
            <h2 className="font-semibold text-white">Notifications</h2>
          </div>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Email updates <span className="text-cyan-300">On</span></div>
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3">Push reminders <span className="text-cyan-300">On</span></div>
          </div>
        </div>

        <div className="glass p-6 lg:col-span-2">
          <div className="flex items-center gap-3">
            <Shield size={20} className="text-cyan-300" />
            <h2 className="font-semibold text-white">Security</h2>
          </div>
          <div className="mt-4 rounded-3xl border border-white/10 bg-white/5 p-4 text-sm text-slate-400">MFA enabled • 2FA backup active</div>
        </div>
      </div>

      <button className="flex items-center gap-2 rounded-2xl border border-rose-500/20 bg-rose-500/10 px-4 py-3 text-sm font-semibold text-rose-300">
        <LogOut size={16} /> Logout
      </button>
    </div>
  );
}
