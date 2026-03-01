const steps = [
  {
    num: "01",
    title: "Send a request",
    description: "Pass any URL to our API with your API key. Add options: JS rendering, country, proxy type.",
    code: 'GET /v1/scrape?url=https://target.com&render_js=true',
  },
  {
    num: "02",
    title: "We do the hard work",
    description: "Our engine picks the best proxy, renders JavaScript, bypasses anti-bot protection, and retries on failure.",
    code: '→ Proxy rotation → Browser render → Anti-bot bypass → Retry',
  },
  {
    num: "03",
    title: "Get clean data",
    description: "Receive the full rendered HTML (or structured JSON) in 3-8 seconds. Failed? No charge.",
    code: '← 200 OK | 48,239 chars | 4.2s | 1 credit used',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black text-ox-white md:text-4xl">
            How it works
          </h2>
          <p className="text-lg text-ox-muted">
            Three steps. No SDKs required. Works with any HTTP client.
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="flex gap-6 rounded-2xl border border-ox-border bg-ox-card/30 p-8 md:items-center"
            >
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-ox-accent/10 font-mono text-xl font-bold text-ox-accent">
                  {step.num}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="mb-1 text-lg font-bold text-ox-white">
                  {step.title}
                </h3>
                <p className="mb-3 text-sm text-ox-muted">{step.description}</p>
                <code className="inline-block rounded-lg bg-ox-dark px-4 py-2 font-mono text-xs text-ox-accent">
                  {step.code}
                </code>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden h-8 w-px bg-ox-border md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
