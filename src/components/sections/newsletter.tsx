export function Newsletter() {
    return (
      <section className="border-t border-black/10 py-24">
        <div className="container-custom grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-neutral-500">
              Newsletter
            </p>
  
            <h2 className="font-editorial text-5xl leading-[0.95] md:text-7xl">
              Receive occasional notes.
            </h2>
          </div>
  
          <form className="flex w-full flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Email address"
              className="h-12 flex-1 border border-black/10 bg-transparent px-4 text-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-black/40"
            />
  
            <button
              type="button"
              className="h-12 border border-black/10 px-6 text-sm transition-all duration-500 hover:bg-black hover:text-white"
            >
              Sign up
            </button>
          </form>
        </div>
      </section>
    );
  }