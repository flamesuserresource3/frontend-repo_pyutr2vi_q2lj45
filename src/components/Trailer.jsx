import { Play } from "lucide-react";

export default function Trailer() {
  return (
    <section id="trailer" className="relative py-16 md:py-24 bg-black text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(50%_50%_at_20%_0%,rgba(34,197,94,0.12),transparent_60%)]" />
      <div className="relative container mx-auto px-6 md:px-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Official Trailer</h2>
          <p className="mt-4 text-zinc-400">A glimpse beyond the veil. Sound on.</p>
        </div>
        <div className="mt-10 max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-900">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&modestbranding=1&rel=0"
            title="The Paradise — Official Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="mt-6 flex items-center justify-center gap-2 text-zinc-400 text-sm">
          <Play className="h-4 w-4" /> 2:28 runtime
        </div>
      </div>
    </section>
  );
}
