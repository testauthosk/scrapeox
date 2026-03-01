export function CTA() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-ox-accent/20 bg-gradient-to-br from-ox-card to-ox-dark p-12 text-center md:p-16">
          {/* Glow */}
          <div className="absolute top-0 left-1/2 h-40 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-ox-accent/10 blur-[80px]" />

          <div className="relative">
            <h2 className="mb-4 text-3xl font-black text-ox-white md:text-5xl">
              Stop fighting anti-bots.
              <br />
              <span className="gradient-text">Start getting data.</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-lg text-ox-muted">
              1,000 free credits. No credit card. Setup in 30 seconds.
            </p>
            <a
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-ox-accent px-10 py-4 text-lg font-bold text-ox-black transition-all hover:bg-ox-accent-hover hover:shadow-xl hover:shadow-ox-accent/25"
            >
              Get Your API Key
              <svg
                className="h-5 w-5"
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
          </div>
        </div>
      </div>
    </section>
  );
}
