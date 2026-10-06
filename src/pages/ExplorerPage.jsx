import { useState } from 'react';
import { Folder, FolderOpen, Search, Code2, ChevronRight } from 'lucide-react';

const tree = [
  { name: 'src', children: [{ name: 'auth' }, { name: 'api' }, { name: 'ui' }] },
  { name: 'docs', children: [{ name: 'onboarding.md' }, { name: 'architecture.md' }] },
  { name: 'tests', children: [{ name: 'auth.test.ts' }] },
];

export default function ExplorerPage() {
  const [expanded, setExpanded] = useState({ src: true });

  return (
    <div className="grid gap-6 xl:grid-cols-[0.8fr_1.2fr]">
      <div className="glass p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-semibold text-white">Repository tree</h2>
          <button className="rounded-full border border-white/10 px-3 py-1 text-sm text-slate-400">Expand all</button>
        </div>
        <div className="space-y-1">
          {tree.map((node) => (
            <div key={node.name}>
              <button className="flex w-full items-center gap-2 rounded-2xl px-3 py-2 text-left text-sm text-slate-300 hover:bg-white/5" onClick={() => setExpanded((prev) => ({ ...prev, [node.name]: !prev[node.name] }))}>
                {expanded[node.name] ? <FolderOpen size={16} className="text-cyan-300" /> : <Folder size={16} className="text-cyan-300" />}
                {node.name}
              </button>
              {expanded[node.name] && node.children && (
                <div className="ml-6 space-y-1">
                  {node.children.map((child) => (
                    <div key={child.name} className="flex items-center gap-2 rounded-2xl px-3 py-2 text-sm text-slate-400 hover:bg-white/5">
                      <ChevronRight size={14} /> {child.name}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="glass p-5">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-slate-400">File viewer</p>
            <h2 className="font-semibold text-white">src/auth/jwt.ts</h2>
          </div>
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300">
            <Search size={14} /> Search in file
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-sm text-slate-400">
            <Code2 size={14} /> TypeScript
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-7 text-slate-300">
            <code>{`export function verifyJwt(token: string) {
  const payload = decode(token);
  return payload?.exp > Date.now() / 1000;
}`}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
