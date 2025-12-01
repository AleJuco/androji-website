import type { StaticImageData } from "next/image";
import { useState, ReactNode, useEffect } from "react";

export interface CardInterface{
    indicator?: string;
    image?: string | StaticImageData;
    title?: string;
    subtitle?: string;
    body?: string;
    rotation?: number;
    bgColor?: string;
    imagePosition?: "top" | "bottom" | "left" | "right";
    link?: string;
}

export interface CarouselProps {
  slides: ReactNode[]; // Accepts an array of JSX elements
}

