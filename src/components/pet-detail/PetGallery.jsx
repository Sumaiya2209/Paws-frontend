"use client";

import Image from "next/image";
import { useState } from "react";

export default function PetGallery({ images }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const selectImage = (index) => {
    if (index === activeIndex) return;
    setFading(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFading(false);
    }, 200);
  };

  const active = images[activeIndex];

  return (
    <section className="space-y-stack-sm">
      <div className="group aspect-[4/3] overflow-hidden rounded-3xl shadow-xl">
        <Image
          src={active.src}
          alt={active.alt}
          width={1200}
          height={900}
          priority
          className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>

      <div className="custom-scrollbar flex gap-stack-sm overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => selectImage(index)}
            className={`h-24 w-24 flex-shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
              index === activeIndex
                ? "border-primary shadow-md"
                : "border-transparent hover:border-outline-variant"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={96}
              height={96}
              className="h-full w-full object-cover"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
