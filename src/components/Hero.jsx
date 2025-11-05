import { Star, Play, Film, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-zinc-950 via-zinc-900 to-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(99,102,241,0.25)_0%,rgba(0,0,0,0.6)_60%,rgba(0,0,0,1)_100%)] pointer-events-none" />
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-indigo-600/20 blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm backdrop-blur">
            <Film className="h-4 w-4 text-indigo-400" />
            <span className="text-zinc-300">An Original Motion Picture</span>
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-transparent">
            The Paradise
          </h1>

          <p className="mt-6 text-base md:text-lg text-zinc-300 leading-relaxed">
            On the edge of a dying world, a small group discovers a hidden sanctuary where reality bends—and hope demands a price.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#trailer"
              className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 transition-colors px-6 py-3 text-white font-medium"
            >
              <Play className="h-5 w-5" /> Watch Trailer
            </a>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-zinc-300">
              <Star className="h-5 w-5 text-yellow-400" />
              <span className="font-semibold text-white">8.7</span>
              <span className="text-zinc-400">IMDb</span>
              <span className="mx-1">•</span>
              <Calendar className="h-5 w-5 text-indigo-300" />
              <span>2025</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
