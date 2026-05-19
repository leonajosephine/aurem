"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed left-0 top-0 z-50 w-full bg-transparent`}>
      <div className="container-custom relative flex items-center justify-between py-6">
        <nav className="hidden gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm transition-opacity hover:opacity-60 ${isScrolled ? "text-black" : "text-white/80"}`}
          >
            Home
          </Link>

          <Link
            href="/collection"
            className={`text-sm transition-opacity hover:opacity-60 ${isScrolled ? "text-black" : "text-white/80"}`}
          >
            Collection
          </Link>

          <Link
            href="/about"
            className={`text-sm transition-opacity hover:opacity-60 ${isScrolled ? "text-black" : "text-white/80"}`}
          >
            About
          </Link>
        </nav>

        <Link
          href="/"
          className={`absolute left-1/2 -translate-x-1/2 font-brand text-3xl tracking-[0.16em] ${isScrolled ? "text-black" : "text-white"}`}
        >
          aurem
        </Link>

        <div className={`hidden text-sm md:block ${isScrolled ? "text-black" : "text-white/80"}`}>
          Bag 0
        </div>
      </div>
    </header>
  );
}