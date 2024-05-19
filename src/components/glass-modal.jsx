export function GlassModal({ children }) {
  return (
    <div className="max-h-full rounded-md border border-zinc-500/20 bg-zinc-500/10 px-10 py-6 shadow-modal backdrop-blur-sm">
      {children}
    </div>
  );
}
