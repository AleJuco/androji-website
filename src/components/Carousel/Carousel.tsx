"use client";

import { useState, ReactNode, useEffect } from "react";

interface CarouselProps {
  slides: ReactNode[]; // Accepts an array of JSX elements
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden bg-secondary">
      {/* Slides */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 h-full">
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prev}
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 
                   bg-black/50 text-white px-4 py-2 rounded-full 
                   transition-transform duration-300 hover:-translate-y-[60%]"
      >
        ◀
      </button>
      <button
        onClick={next}
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 
                   bg-black/50 text-white px-4 py-2 rounded-full 
                   transition-transform duration-300 hover:-translate-y-[60%]"
      >
        ▶
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full ${
              i === current ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
