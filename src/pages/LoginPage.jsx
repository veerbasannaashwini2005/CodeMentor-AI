import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Chrome } from 'lucide-react';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Signed in successfully');
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.2),_transparent_25%),#020617] p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass w-full max-w-5xl overflow-hidden">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-gradient-to-br from-blue-600/20 to-violet-600/20 p-8 lg:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Welcome back</p>
            <h1 className="mt-3 font-display text-3xl font-semibold">Sign in to your AI workspace</h1>
            <p className="mt-3 max-w-md text-slate-400">Continue exploring repositories, ask context-aware questions, and accelerate onboarding.</p>
            <div className="mt-8 rounded-3xl border border-white/10 bg-slate-900/60 p-6">
              <p className="text-sm text-slate-300">“CodeMentor helped our team understand the platform in half the time.”</p>
              <p className="mt-4 text-sm font-semibold text-white">- Product Engineering Team</p>
            </div>
          </div>
          <div className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Mail size={16} className="text-slate-400" />
                  <input type="email" defaultValue="alex@codementor.ai" className="w-full bg-transparent outline-none" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Password</label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Lock size={16} className="text-slate-400" />
                  <input type={show ? 'text' : 'password'} defaultValue="password123" className="w-full bg-transparent outline-none" />
                  <button type="button" onClick={() => setShow(!show)} className="text-slate-400">
                    {show ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-slate-400">
                <label className="flex items-center gap-2"><input type="checkbox" className="rounded border-white/10 bg-transparent" /> Remember me</label>
                <a href="#" className="text-cyan-300">Forgot password?</a>
              </div>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 font-semibold text-white">Login <ArrowRight size={16} /></button>
              <button type="button" className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-slate-200"> <Chrome size={16} /> Continue with Google </button>
              <p className="text-center text-sm text-slate-400">Don’t have an account? <Link to="/register" className="text-cyan-300">Register</Link></p>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
