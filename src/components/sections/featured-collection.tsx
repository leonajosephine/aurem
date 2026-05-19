import { ProductCard } from "@/components/ui/product-card";
import { products } from "@/data/products";

export function FeaturedCollection() {
  return (
    <section className="py-32">
      <div className="container-custom">
        <div className="mb-16 flex items-end justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-neutral-500">
              Collection
            </p>

            <h2 className="font-editorial text-5xl">
              Sculptural forms
              <br />
              inspired by water.
            </h2>
          </div>

          <a
            href="/collection"
            className="hidden text-sm text-neutral-600 transition-opacity hover:opacity-60 md:block"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              slug={product.slug}
              name={product.name}
              price={product.price}
              image={product.image}
              hoverImage={product.hoverImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
}