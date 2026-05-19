import Image from "next/image";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

const values = ["Handcrafted", "Organic forms", "Timeless", "Feminine"];

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section className="relative flex min-h-screen items-center overflow-hidden">
        <Image
          src="/images/editorial/shoot.png"
          alt="Aurem atelier story"
          fill
          priority
          className="object-cover opacity-90"
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 container-custom text-center text-white">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-white/70">
            Our Story
          </p>

          <h1 className="mx-auto max-w-4xl font-editorial text-6xl leading-[0.95] md:text-8xl">
            Inspired by nature.
            <br />
            Created by hand.
          </h1>
        </div>
      </section>

      <section className="container-custom grid gap-12 py-32 md:grid-cols-2 md:items-center">
        <div className="max-w-md space-y-6 text-sm leading-7 text-neutral-600">
          <p className="text-neutral-900">
            Aurem is a fictional fine jewelry atelier rooted in nature,
            femininity and imperfect forms.
          </p>

          <p>
            Each piece is imagined as a small ritual — worn close to the skin,
            shaped by water, sunlight and organic textures.
          </p>

          <p>
            The visual world is soft, tactile and editorial, blending quiet
            luxury with modern femininity.
          </p>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden bg-[#f3efe8]">
          <Image
            src="/images/editorial/editorial_01.png"
            alt="Aurem handcrafted jewelry"
            fill
            className="object-cover"
          />
        </div>
      </section>

      <section className="border-y border-black/10">
        <div className="container-custom grid gap-12 py-28 md:grid-cols-2">
          <div className="relative aspect-[16/10] overflow-hidden bg-[#f3efe8]">
            <Image
              src="/images/editorial/gold.png"
              alt="Aurem materials"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-8 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Our Values
            </p>

            <div className="border-t border-black/10">
              {values.map((value) => (
                <div
                  key={value}
                  className="flex items-center justify-between border-b border-black/10 py-6"
                >
                  <p className="text-sm uppercase tracking-[0.18em]">
                    {value}
                  </p>
                  <span className="text-lg">+</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-32 text-center">
        <h2 className="mx-auto max-w-4xl font-editorial text-6xl leading-[0.95] md:text-8xl">
          Made with intention.
          <br />
          Made to last.
        </h2>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            "/images/editorial/shoot.png",
            "/images/editorial/shoot2.png",
            "/images/editorial/shoot4.png",
          ].map((image) => (
            <div
              key={image}
              className="relative aspect-[4/3] overflow-hidden bg-[#f3efe8]"
            >
              <Image
                src={image}
                alt="Aurem editorial detail"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}