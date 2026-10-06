import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Mail, Lock, ArrowRight } from 'lucide-react';
import toast from 'react-hot-toast';

export default function RegisterPage() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Account created successfully');
    navigate('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.2),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(124,58,237,0.2),_transparent_25%),#020617] p-4">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass w-full max-w-4xl overflow-hidden">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-gradient-to-br from-blue-600/20 to-violet-600/20 p-8 lg:p-12">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Start for free</p>
            <h1 className="mt-3 font-display text-3xl font-semibold">Create your CodeMentor account</h1>
            <p className="mt-3 text-slate-400">Set up your workspace and begin transforming repositories into interactive knowledge.</p>
          </div>
          <div className="p-8 lg:p-12">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm text-slate-300">Full Name</label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><User size={16} className="text-slate-400" /><input className="w-full bg-transparent outline-none" defaultValue="Alex Morgan" /></div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Email</label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><Mail size={16} className="text-slate-400" /><input type="email" className="w-full bg-transparent outline-none" defaultValue="alex@codementor.ai" /></div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Password</label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><Lock size={16} className="text-slate-400" /><input type={show ? 'text' : 'password'} className="w-full bg-transparent outline-none" defaultValue="Password123" /><button type="button" onClick={() => setShow(!show)} className="text-slate-400">{show ? 'Hide' : 'Show'}</button></div>
              </div>
              <div>
                <label className="mb-2 block text-sm text-slate-300">Confirm Password</label>
                <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"><Lock size={16} className="text-slate-400" /><input type={showConfirm ? 'text' : 'password'} className="w-full bg-transparent outline-none" defaultValue="Password123" /><button type="button" onClick={() => setShowConfirm(!showConfirm)} className="text-slate-400">{showConfirm ? 'Hide' : 'Show'}</button></div>
              </div>
              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 font-semibold text-white">Register <ArrowRight size={16} /></button>
              <p className="text-center text-sm text-slate-400">Already have an account? <Link to="/login" className="text-cyan-300">Login</Link></p>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
