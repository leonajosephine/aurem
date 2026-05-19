import Image from "next/image";
import Link from "next/link";

type ProductCardProps = {
  slug: string;
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
};

export function ProductCard({
  slug,
  name,
  price,
  image,
  hoverImage,
}: ProductCardProps) {
  return (
    <Link href={`/collection/${slug}`} className="group block">
      <article>
        <div className="relative aspect-4/5 overflow-hidden bg-[#f3efe8]">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.03]"
          />

          {hoverImage && (
            <Image
              src={hoverImage}
              alt={`${name} worn`}
              fill
              className="object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.03] group-hover:opacity-100"
            />
          )}
        </div>

        <div className="mt-4 flex items-start justify-between">
          <div>
            <h3 className="text-sm tracking-wide">{name}</h3>
            <p className="mt-1 text-sm text-neutral-500">{price}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}