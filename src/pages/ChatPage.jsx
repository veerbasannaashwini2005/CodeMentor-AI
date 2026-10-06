import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Send, Mic, Paperclip, Copy, Download, Sparkles, Bot, User } from 'lucide-react';

const history = ['How does auth work?', 'Explain the API layer', 'Summarize onboarding'];
const messages = [
  { role: 'ai', text: 'I can explain the authentication flow, point you to the relevant modules, and summarize how the system is wired together.' },
  { role: 'user', text: 'How does the repository handle user authentication?' },
  { role: 'ai', text: 'Authentication is handled in the auth service and middleware layer. The flow validates JWTs, checks permissions, and then forwards the request to the gateway.' },
];

export default function ChatPage() {
  const [input, setInput] = useState('');
  return (
    <div className="flex min-h-[78vh] flex-col overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/60">
      <div className="flex h-full flex-col lg:flex-row">
        <aside className="w-full border-b border-white/10 bg-slate-950/70 p-4 lg:w-72 lg:border-b-0 lg:border-r">
          <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 font-semibold text-white">
            <Plus size={16} /> New Chat
          </button>
          <div className="mt-6 space-y-2">
            {history.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">{item}</div>
            ))}
          </div>
        </aside>
        <section className="flex flex-1 flex-col">
          <div className="flex-1 space-y-4 overflow-y-auto p-4 lg:p-6">
            {messages.map((message, index) => (
              <motion.div key={`${message.role}-${index}`} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-3xl px-4 py-3 ${message.role === 'user' ? 'bg-gradient-to-r from-blue-600 to-violet-600 text-white' : 'border border-white/10 bg-white/5 text-slate-200'}`}>
                  <div className="mb-2 flex items-center gap-2 text-sm">
                    {message.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                    <span>{message.role === 'user' ? 'You' : 'CodeMentor AI'}</span>
                  </div>
                  <p className="text-sm leading-7">{message.text}</p>
                </div>
              </motion.div>
            ))}
            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-sm text-cyan-200">
              <div className="flex items-center gap-2 font-semibold"><Sparkles size={15} /> Suggested follow-up</div>
              <p className="mt-2">Would you like a code snippet or a table of the related modules?</p>
            </div>
          </div>
          <div className="border-t border-white/10 p-4 lg:p-6">
            <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-slate-950/80 p-3 sm:flex-row sm:items-center">
              <button className="rounded-2xl border border-white/10 bg-white/5 p-2.5"><Paperclip size={16} /></button>
              <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about the repository..." className="flex-1 bg-transparent outline-none" />
              <div className="flex items-center gap-2">
                <button className="rounded-2xl border border-white/10 bg-white/5 p-2.5"><Mic size={16} /></button>
                <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 p-2.5 text-white"><Send size={16} /></button>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-end gap-3 text-sm text-slate-400">
              <button className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 hover:bg-white/5"><Copy size={14} /> Copy</button>
              <button className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 hover:bg-white/5"><Download size={14} /> Download</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
