"use client";

import MoviePanel from "./moviePanel";
import { movie } from "@/app/data/movies";

interface MovieGridProps {
  movies: movie[];
}

export default function MovieGrid({ movies }: MovieGridProps) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 min-[375px]:grid-cols-1 justify-items-center">
      {movies.map((m, index) => (
        <MoviePanel key={index} {...m} />
      ))}
    </div>
  );
}

