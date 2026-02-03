import { ShootingStars } from "@/components/ui/shooting-stars";
import Navbar from "@/components/navbar";
import MovieGrid from "@/components/movieGrid";
import ReviewsPanel from "@/components/reviewsPanel";
import { movies } from "./data/movies";
import { reviews } from "./data/reviews";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black">
      <ShootingStars />

      {/* Page Header */}
      <header className="relative z-10 w-full px-4 sm:px-8 lg:px-16 pt-20 mb-15">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5">
            Track films you've watched
          </h1>
          <h3 className="text-sm sm:text-base text-gray-300 mb-4">
            Save those you want to see. Tell your friends what's good.
          </h3>
          <h6 className="text-2xl sm:text-3xl font-bold text-white">
            Popular This Week
          </h6>
        </div>
      </header>

      <Navbar />

      {/* Movie Grid */}
      <div className="pt-0 w-full px-4 sm:px-8 lg:px-16 pb-12">
        <MovieGrid movies={movies} />
      </div>

      {/* Reviews Header */}
    <div className="w-full px-4 sm:px-8 lg:px-16 mb-6">
  <h2 className="text-2xl sm:text-3xl font-bold text-white text-left">
    Recent Reviews
  </h2>
</div>

{/* Reviews Panel */}
<div className="w-full px-4 sm:px-8 lg:px-16 pb-16">
  <ReviewsPanel reviews={reviews} />
</div>
    </main>
  );
}
