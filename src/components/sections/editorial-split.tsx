import Image from "next/image";

import { Button } from "@/components/ui/button";

export function EditorialSplit() {
  return (
    <section className="py-32">
      <div className="container-custom grid gap-12 md:grid-cols-2 md:items-center">
        <div className="relative aspect-[4/5] overflow-hidden bg-[#f3efe8]">
          <Image
            src="/images/editorial/editorial_01.png"
            alt="Aurem editorial"
            fill
            className="object-cover opacity-90"
          />
        </div>

        <div className="md:pl-16">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            The Atelier
          </p>

          <h2 className="font-editorial text-5xl leading-[0.95] md:text-7xl">
            Jewelry shaped by water, skin and light.
          </h2>

          <p className="mt-8 max-w-md text-sm leading-7 text-neutral-600">
            Aurem creates sculptural pieces with organic surfaces, soft stones
            and imperfect forms — designed to feel intimate, tactile and
            timeless.
          </p>

          <Button className="mt-10">Discover the story</Button>
        </div>
      </div>
    </section>
  );
}