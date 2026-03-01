export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      {/* Background grid */}
      <div className="grid-bg absolute inset-0" />

      {/* Gradient orb */}
      <div className="absolute top-20 left-1/2 h-[500px] w-[min(800px,100vw)] -translate-x-1/2 rounded-full bg-ox-accent/5 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-ox-border bg-ox-card/50 px-4 py-1.5 text-sm backdrop-blur-sm">
          <span className="h-2 w-2 rounded-full bg-ox-green animate-pulse" />
          <span className="text-ox-muted">
            Proprietary browser engine · Not another Chromium wrapper
          </span>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-5xl font-black leading-[1.1] tracking-tight text-ox-white md:text-7xl">
          Web Scraping API
          <br />
          <span className="gradient-text">That Actually Works</span>
        </h1>

        {/* Subheading */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-ox-muted md:text-xl">
          95%+ success rate on Cloudflare, DataDome, and other protected sites.
          Simple API. One request = one credit. No hidden multipliers eating your budget.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="/signup"
            className="group flex items-center gap-2 rounded-xl bg-ox-accent px-8 py-3.5 text-base font-bold text-ox-black transition-all hover:bg-ox-accent-hover hover:shadow-xl hover:shadow-ox-accent/25"
          >
            Start Free — 1,000 Credits
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <a
            href="https://docs.scrapeox.io"
            className="flex items-center gap-2 rounded-xl border border-ox-border px-8 py-3.5 text-base font-semibold text-ox-text transition-all hover:border-ox-muted hover:bg-ox-card"
          >
            View Documentation
          </a>
        </div>

        {/* Trust bar */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-ox-muted">
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-ox-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            No credit card required
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-ox-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Pay only for successful requests
          </span>
          <span className="flex items-center gap-1.5">
            <svg className="h-4 w-4 text-ox-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            5-second avg response time
          </span>
        </div>
      </div>
    </section>
  );
}
