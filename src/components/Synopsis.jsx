export default function Synopsis() {
  return (
    <section className="relative py-16 md:py-24 bg-black text-zinc-100">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(40%_40%_at_80%_0%,rgba(99,102,241,0.15),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">A sanctuary—or a trap?</h2>
          <p className="mt-6 text-zinc-300 leading-relaxed">
            When a faint signal leads a crew across the wastelands, they uncover a hidden biome protected from the collapse. Inside, time stretches, memories sharpen, and the past whispers back. But paradise was never meant to be found.
          </p>
          <p className="mt-4 text-zinc-400">
            As their bonds are tested, the choice becomes clear: escape with the truth—or stay and become part of the illusion forever.
          </p>
        </div>
        <div className="relative">
          <div className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-indigo-600/20 via-violet-600/10 to-transparent shadow-2xl overflow-hidden">
            <div className="h-full w-full grid grid-cols-3 grid-rows-3 gap-px p-2">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-md bg-zinc-900/60 backdrop-blur-sm border border-white/5"
                />
              ))}
            </div>
          </div>
          <div className="absolute -inset-4 -z-10 blur-2xl bg-indigo-500/10 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
