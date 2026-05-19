import Image from "next/image";

export function CampaignBanner() {
  return (
    <section className="relative h-[90vh] overflow-hidden">
      <Image
        src="/images/editorial/campaign_01.png"
        alt="Aurem campaign"
        fill
        className="object-cover opacity-95"
      />

      <div className="absolute inset-0 bg-black/10" />

      <div className="relative z-10 flex h-full items-end">
        <div className="container-custom pb-16">
          <p className="max-w-md text-sm uppercase tracking-[0.25em] text-white/80">
            Campaign 01
          </p>

          <h2 className="mt-4 max-w-3xl font-editorial text-6xl leading-[0.95] text-white md:text-8xl">
            Worn like sunlight on skin.
          </h2>
        </div>
      </div>
    </section>
  );
}