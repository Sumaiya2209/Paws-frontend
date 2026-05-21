export default function Newsletter() {
  return (
    <section className="py-stack-lg">
      <div className="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
        <div className="primary-gradient relative overflow-hidden rounded-[3rem] p-10 text-white md:p-20">
          <div className="absolute top-0 right-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-64 w-64 translate-y-1/2 -translate-x-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-stack-sm font-display-lg text-display-lg-mobile md:text-headline-xl">
              Stay Updated on New Arrivals
            </h2>
            <p className="mb-stack-lg text-body-lg text-white/80">
              Join 15,000+ pet lovers and be the first to know when a pet
              matching your preferences becomes available.
            </p>
            <form className="flex max-w-lg flex-col gap-stack-sm sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow rounded-2xl border border-white/20 bg-white/10 px-6 py-4 transition-all placeholder:text-white/60 focus:ring-2 focus:ring-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="whitespace-nowrap rounded-2xl bg-white px-8 py-4 font-label-md text-primary transition-all hover:bg-surface-container active:scale-95"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
