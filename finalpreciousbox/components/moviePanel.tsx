"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { movie } from "@/app/data/movies";

export default function MoviePanel({
  title,
  year,
  rating,
  image,
}: movie) {
  return (
    <div className="w-48 sm:w-52 md:w-56 lg:w-60 cursor-pointer">
      {/* Image container */}
      <div className="relative group rounded-xl overflow-hidden transition-transform transform hover:scale-105">
        <Image
          src={image}
          alt={title}
          width={190}  // increased width
          height={288} // increased height
          className="object-cover w-full h-72 sm:h-80 md:h-96"
        />

        {/* Dark overlay + rating */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="flex items-center gap-1 text-white text-sm">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}/10</span>
          </div>
        </div>
      </div>

      <div className="mt-2 text-center">
        <p className="text-sm sm:text-base font-semibold text-white truncate">
          {title}
        </p>
        <p className="text-xs sm:text-sm text-gray-400">{year}</p>
      </div>
    </div>
  );
}
