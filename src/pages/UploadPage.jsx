import { useState } from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Github, CheckCircle2, ArrowUpRight, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

export default function UploadPage() {
  const [uploading, setUploading] = useState(false);
  const [done, setDone] = useState(false);

  const handleUpload = () => {
    setUploading(true);
    setDone(false);
    setTimeout(() => {
      setUploading(false);
      setDone(true);
      toast.success('Repository uploaded and parsing started');
    }, 1800);
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Repository ingestion</p>
        <h1 className="font-display text-3xl font-semibold">Upload a new codebase</h1>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="glass p-6">
          <div className="rounded-3xl border border-dashed border-cyan-400/30 bg-cyan-500/10 p-8 text-center">
            <UploadCloud size={36} className="mx-auto text-cyan-300" />
            <h2 className="mt-4 font-semibold text-white">Drag and drop your ZIP archive</h2>
            <p className="mt-2 text-sm text-slate-400">Or browse your computer to upload a repository bundle.</p>
            <button className="mt-5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 font-semibold text-white">Choose File</button>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
            <label className="mb-2 block text-sm text-slate-300">GitHub Repository URL</label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3">
                <Github size={16} className="text-slate-400" />
                <input className="w-full bg-transparent outline-none" placeholder="https://github.com/owner/repo" />
              </div>
              <button onClick={handleUpload} className="rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 font-semibold text-white">Upload</button>
            </div>
          </div>

          <div className="mt-6 rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="flex items-center justify-between text-sm text-slate-400">
              <span>Parsing progress</span>
              <span>{uploading ? '78%' : done ? '100%' : '0%'}</span>
            </div>
            <div className="mt-3 h-2 rounded-full bg-slate-800">
              <div className={`h-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 transition-all ${uploading ? 'w-[78%]' : done ? 'w-full' : 'w-0'}`} />
            </div>
            {uploading && <div className="mt-4 flex items-center gap-2 text-sm text-slate-300"><Loader2 size={16} className="animate-spin" /> Building embeddings and indexing files…</div>}
            {done && <div className="mt-4 flex items-center gap-2 text-sm text-emerald-300"><CheckCircle2 size={16} /> Repository successfully parsed and indexed.</div>}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} className="glass p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-white">Repository info</h2>
            <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-xs text-emerald-300">Ready</span>
          </div>
          <div className="mt-5 space-y-4 text-sm text-slate-400">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-slate-300">aurora-platform</p>
              <p className="mt-1">TypeScript monorepo • 18,420 files</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-slate-300">Last indexed</p>
              <p className="mt-1">2 minutes ago</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-slate-300">Languages</p>
              <p className="mt-1">TypeScript, Python, SQL</p>
            </div>
            <button className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-slate-200">Open in explorer <ArrowUpRight size={16} /></button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
