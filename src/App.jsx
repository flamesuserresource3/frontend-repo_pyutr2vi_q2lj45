import Hero from "./components/Hero";
import Synopsis from "./components/Synopsis";
import Cast from "./components/Cast";
import Trailer from "./components/Trailer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Hero />
      <Synopsis />
      <Cast />
      <Trailer />
      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="container mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-zinc-400 text-sm">
          <div>
            <span className="text-white font-semibold">The Paradise</span>
            <span className="mx-2">•</span>
            An original sci‑fi feature
          </div>
          <div className="flex items-center gap-4">
            <a href="#trailer" className="hover:text-white transition-colors">Trailer</a>
            <a href="#" className="hover:text-white transition-colors">Press Kit</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
