export function GlassModal({ children }) {
  return (
    <div className="px-10 py-6 max-h-full bg-zinc-500/10 rounded-md border border-zinc-500/20 backdrop-blur-sm shadow-modal">
      {children}
    </div>
  )
}
