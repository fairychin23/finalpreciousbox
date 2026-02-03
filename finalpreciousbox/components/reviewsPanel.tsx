"use client";

import { Star } from "lucide-react";
import { review as ReviewType } from "@/app/data/reviews";
function ReviewCard({ title, year, rating, review: reviewText }: ReviewType) {
  return (
    <div className="w-full rounded-xl bg-gray-900 p-6 text-white shadow-md">
      {/* Top: title, year, rating */}
      <div className="mb-3 flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-xs text-gray-400">{year}</p>
        </div>

        {/* Stars out of 10 */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 10 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Review Text */}
      <div className="border-t border-gray-700 pt-3 text-sm text-gray-300">
        {reviewText}
      </div>
    </div>
  );
}

// This is the panel component that renders multiple ReviewCards
interface ReviewsPanelProps {
  reviews: ReviewType[];
}

export default function ReviewsPanel({ reviews }: ReviewsPanelProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {reviews.map((r, index) => (
        <ReviewCard key={index} {...r} />
      ))}
    </div>
  );
}
