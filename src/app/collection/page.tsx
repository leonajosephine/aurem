import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/data/products";

export default function CollectionPage() {
  return (
    <main>
      <Navbar />

      <section className="container-custom pt-40 pb-20">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
          Collection
        </p>

        <h1 className="font-editorial text-7xl leading-[0.95] md:text-9xl">
          Objects for
          <br />
          everyday rituals.
        </h1>
      </section>

      <section className="container-custom pb-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}