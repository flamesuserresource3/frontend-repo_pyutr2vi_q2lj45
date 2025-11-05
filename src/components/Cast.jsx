import { Star } from "lucide-react";

const people = [
  { name: "Ava Lin", role: "Dr. Mira Chen", color: "from-fuchsia-500 to-violet-500" },
  { name: "Noah Reed", role: "Elias Ward", color: "from-cyan-500 to-blue-500" },
  { name: "Sora Vale", role: "Kaya Thorne", color: "from-emerald-500 to-teal-500" },
  { name: "Jax Arden", role: "Commander Rourke", color: "from-amber-500 to-orange-500" },
  { name: "Iris Kade", role: "The Keeper", color: "from-pink-500 to-rose-500" },
  { name: "Luca Hale", role: "Silas Kade", color: "from-indigo-500 to-purple-500" },
];

function Avatar({ name, color }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className={`h-14 w-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-semibold shadow-lg shadow-black/30`}>
      {initials}
    </div>
  );
}

export default function Cast() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="container mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Cast & Characters</h2>
            <p className="mt-3 text-zinc-400 max-w-2xl">
              Faces of a world that shouldn’t exist. Meet the people who risk everything to step into The Paradise.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm">
            <Star className="h-4 w-4 text-yellow-400" /> Critics’ Choice Selection
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {people.map((p) => (
            <div key={p.name} className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-white/20 transition-colors">
              <div className="flex items-center gap-4">
                <Avatar name={p.name} color={p.color} />
                <div>
                  <div className="font-semibold text-lg">{p.name}</div>
                  <div className="text-sm text-zinc-400">as {p.role}</div>
                </div>
              </div>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <p className="mt-4 text-sm text-zinc-300">
                In the sanctuary, truth shatters like glass. {p.role} knows what must be left behind to survive.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
