export function Footer() {
    return (
      <footer className="border-t border-black/10 py-16">
        <div className="container-custom grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-brand text-xl tracking-[0.2em]">aurem</p>
            <p className="mt-6 max-w-sm text-sm leading-6 text-neutral-600">
              Aurem Atelier creates sculptural jewelry inspired by nature,
              femininity and light.
            </p>
          </div>
  
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em]">Explore</p>
            <div className="space-y-3 text-sm text-neutral-600">
              <a href="/collection" className="block hover:text-black">Collection</a>
              <a href="/about" className="block hover:text-black">About</a>
              <a href="" className="block hover:text-black">Journal</a>
            </div>
          </div>
  
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.2em]">Newsletter</p>
            <p className="text-sm leading-6 text-neutral-600">
              Occasional notes on new objects, campaigns and rituals.
            </p>
          </div>
        </div>
      </footer>
    );
  }