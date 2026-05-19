import Image from "next/image";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ui/product-card";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <section className="container-custom grid gap-12 pt-32 pb-24 md:grid-cols-2">
        <div className="grid gap-4">
          {product.gallery.map((image, index) => (
            <div
              key={image}
              className="relative aspect-[4/5] overflow-hidden bg-[#f3efe8]"
            >
              <Image
                src={image}
                alt={`${product.name} image ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <aside className="md:sticky md:top-28 md:h-fit">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
            {product.category} / {product.material}
          </p>

          <h1 className="font-editorial text-6xl leading-[0.95] md:text-8xl">
            {product.name}
          </h1>

          <p className="mt-6 text-lg">{product.price}</p>

          <p className="mt-8 max-w-md text-sm leading-7 text-neutral-600">
            {product.description}
          </p>

          <Button className="mt-10 w-full bg-transparent">
            Add to Bag
          </Button>

          <div className="mt-12 border-t border-black/10">
            <details className="group border-b border-black/10 py-5">
              <summary className="flex cursor-pointer list-none justify-between text-sm">
                Materials
                <span className="transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-neutral-600">
                Hand-finished metal with organic surface texture. Designed as a
                fictional fine jewelry piece for Aurem Atelier.
              </p>
            </details>

            <details className="group border-b border-black/10 py-5">
              <summary className="flex cursor-pointer list-none justify-between text-sm">
                Care
                <span className="transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-neutral-600">
                Store separately and avoid contact with water, perfume and
                cosmetics to preserve the surface.
              </p>
            </details>

            <details className="group border-b border-black/10 py-5">
              <summary className="flex cursor-pointer list-none justify-between text-sm">
                Shipping
                <span className="transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-6 text-neutral-600">
                Complimentary fictional shipping within 3–5 business days.
              </p>
            </details>
          </div>
        </aside>
      </section>

      <section className="border-t border-black/10 py-24">
        <div className="container-custom">
            <div className="mb-12 flex items-end justify-between">
            <div>
                <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
                Curated Selection
                </p>

                <h2 className="font-editorial text-5xl md:text-7xl">
                You may also like
                </h2>
            </div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            {products.slice(4, 8).map((item) => (
                <ProductCard
                key={item.id}
                slug={item.slug}
                name={item.name}
                price={item.price}
                image={item.image}
                hoverImage={item.hoverImage}
                />
            ))}
            </div>
        </div>
        </section>

      <Footer />
    </main>
  );
}