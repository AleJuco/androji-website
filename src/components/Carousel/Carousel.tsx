"use client";

import { useState, ReactNode, useEffect } from "react";
import {CarouselProps} from "@/components/Types/types";
import { ArrowBigRight, ArrowBigLeft } from "lucide-react";

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-screen bg-secondary overflow-hidden">
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
        <ArrowBigLeft />
      </button>
      <button
        onClick={next}
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 
                   bg-black/50 text-white px-4 py-2 rounded-full 
                   transition-transform duration-300 hover:-translate-y-[60%]"
      >
        <ArrowBigRight />
      </button>
    </div>
  );
}
