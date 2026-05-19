import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Newsletter } from "@/components/sections/newsletter";
import { CampaignBanner } from "@/components/sections/campaign-banner";
import { EditorialSplit } from "@/components/sections/editorial-split";
import { ExploreCategories } from "@/components/sections/explore-categories";
import { FeaturedCollection } from "@/components/sections/featured-collection";
import { Hero } from "@/components/sections/hero";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ExploreCategories />
      <EditorialSplit />
      <FeaturedCollection />
      <CampaignBanner />
      <Newsletter />
      <Footer />
    </main>
  );
}