import Navbar from "@/components/navbar";
import { Film, Calendar, Star, Heart } from "lucide-react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import MovieGrid from "@/components/movieGrid";
import { movies } from "../data/movies";



export default function Profile() {
  return (
    <main className="abs min-h-screen w-full bg-black text-white pt-20">
      <ShootingStars />

      {/* Fixed Navbar */}
      <Navbar />

      {/* Profile Content */}
      <div className="w-full px-4 sm:px-8 lg:px-16 py-12">
         <section className="w-full rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 mb-8">
      <div className="flex items-center gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-pink-500 text-3xl font-bold text-white">
          PM
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white">Precious Minoza</h1>
          <p className="text-sm text-gray-400">@fairychin0623</p>
          <p className="mt-2 max-w-xl text-sm text-gray-300">
            Film enthusiast and aspiring critic. Love indie films and classic cinema.
          </p>
        </div>
      </div>
    </section>

     <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <Stat icon={<Film className="text-emerald-400" />} label="Films" value="342" />
      <Stat icon={<Calendar className="text-blue-400" />} label="This Year" value="87" />
      <Stat icon={<Star className="text-yellow-400" />} label="Reviews" value="156" />
      <Stat icon={<Heart className="text-red-400" />} label="Likes" value="892" />
    </section>

      <div className="w-full px-4 sm:px-8 lg:px-16 mb-6">
  <h2 className="text-2xl sm:text-3xl font-bold text-white text-left">
    Favorite Films
  </h2>
</div>
   {/* Movie Grid */}
      <div className="pt-12 w-full px-4 sm:px-8 lg:px-16 pb-10">
        <MovieGrid movies={movies} />
      </div>



      </div>
    </main>
  );
}


function Stat({ icon, label, value }: any) {
  return (
    <div className="rounded-xl bg-slate-900/70 p-5">
      <div className="mb-2 flex items-center gap-2 text-sm text-gray-400">
        {icon}
        {label}
      </div>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  );
}

