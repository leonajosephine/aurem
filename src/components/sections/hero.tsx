"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const heroImages = [
  "/images/hero/hero_01.png",
  "/images/hero/hero_papaya.png",
  "/images/hero/hero_06.png",
  "/images/hero/hero_07.png",
];

export function Hero() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((current) => current + 1);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const visibleIndex = activeImage % heroImages.length;

  return (
    <section className="relative h-screen overflow-hidden bg-black">
      <div
        className="flex h-full transition-transform duration-[1600ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          width: `${heroImages.length * 100}%`,
          transform: `translateX(-${visibleIndex * (100 / heroImages.length)}%)`,
        }}
      >
        {heroImages.map((image, index) => (
          <div
            key={image}
            className="relative h-full shrink-0"
            style={{ width: `${100 / heroImages.length}%` }}
          >
            <Image
              src={image}
              alt="Aurem campaign image"
              fill
              priority={index === 0}
              className="object-cover opacity-90"
            />
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-black/15" />

      <div className="pointer-events-none absolute inset-0 z-[1] opacity-[0.08] mix-blend-overlay" />

      <div className="absolute inset-0 z-10 flex h-full items-center">
        <div className="container-custom pt-20">
          <div className="grid gap-8 text-white md:grid-cols-12 md:items-end">
            <div className="md:col-span-5">
              <p className="max-w-md font-editorial text-2xl leading-[0.95] md:text-5xl">
                Sculptural design.
              </p>
            </div>

            <div className="md:col-span-3 md:col-start-11">
              <p className="text-3xl leading-6 text-white/75">
                Handcrafted
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}