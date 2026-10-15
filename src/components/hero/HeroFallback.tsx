/** CSS-only stand-in shown when WebGL is unavailable or the context is lost. */
export default function HeroFallback() {
  const bar = 'h-2 rounded-full'
  return (
    <div aria-hidden="true" className="relative mx-auto h-full w-full max-w-xl select-none">
      <div className="glass absolute left-[4%] top-[18%] w-[62%] rounded-2xl p-4 shadow-2xl">
        <div className="mb-3 flex gap-1.5"><i className="size-2 rounded-full bg-red-500" /><i className="size-2 rounded-full bg-amber-500" /><i className="size-2 rounded-full bg-emerald-500" /></div>
        {[70, 45, 82, 36, 60, 50].map((w, i) => (
          <div key={i} className={`${bar} mb-2.5 ${i % 2 ? 'bg-secondary/70' : 'bg-primary/70'}`} style={{ width: `${w}%` }} />
        ))}
      </div>
      <div className="glass absolute right-[2%] top-[8%] w-[38%] rounded-2xl p-3">
        <div className="h-16 rounded-lg border border-secondary/50" />
      </div>
      <div className="glass absolute bottom-[12%] right-[10%] h-40 w-20 rounded-2xl p-2">
        <div className="mb-2 h-8 rounded bg-card" /><div className="mb-2 h-8 rounded bg-card" /><div className="h-8 rounded bg-primary/70" />
      </div>
    </div>
  )
}
