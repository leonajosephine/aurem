import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const categories = [
  {
    title: "Rings",
    href: "/collection?category=rings",
    image: "/images/editorial/rings_01.png",
  },
  {
    title: "Earrings",
    href: "/collection?category=earrings",
    image: "/images/editorial/earrings_01.png",
  },
  {
    title: "Silver",
    href: "/collection?material=silver",
    image: "/images/editorial/silver.png",
  },
  {
    title: "Gold",
    href: "/collection?material=gold",
    image: "/images/editorial/gold.png",
  },
];

export function ExploreCategories() {
  return (
    <section className="py-32">
      <div className="container-custom">
        <h2 className="mb-12 font-editorial text-6xl md:text-8xl">
          Explore
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {categories.map((category) => (
            <a key={category.title} href={category.href} className="group block">
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f3efe8]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />
              </div>

              <div className="mt-5 flex items-center justify-between border-b border-black/10 pb-4">
                <p className="text-lg">{category.title}</p>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}