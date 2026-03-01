const features = [
  {
    icon: "🛡️",
    title: "Anti-Bot Bypass",
    description:
      "Cloudflare, DataDome, Akamai, PerimeterX, hCaptcha — our proprietary browser engine handles them all. Not a Chromium wrapper.",
    tag: "Core",
  },
  {
    icon: "⚡",
    title: "JavaScript Rendering",
    description:
      "Full browser rendering for SPAs, dynamic content, infinite scrolls. Get the HTML you'd see in a real browser.",
    tag: "Core",
  },
  {
    icon: "🌍",
    title: "195 Countries",
    description:
      "Geotargeted requests from any country. See localized prices, content, and search results. Residential & datacenter proxies.",
    tag: "Geo",
  },
  {
    icon: "🔄",
    title: "Auto Proxy Rotation",
    description:
      "Millions of IPs, rotated automatically. Session persistence when you need it. Zero config on your side.",
    tag: "Infra",
  },
  {
    icon: "📊",
    title: "Structured Extraction",
    description:
      "CSS selectors, XPath, or AI-powered extraction. Get JSON instead of raw HTML. Clean data, ready to use.",
    tag: "Soon",
  },
  {
    icon: "🔥",
    title: "95%+ Success Rate",
    description:
      "While others claim high rates with asterisks, we deliver. Failed requests? You don't pay. Simple.",
    tag: "Core",
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black text-ox-white md:text-4xl">
            Everything you need to scrape at scale
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-ox-muted">
            Stop fighting with proxies, CAPTCHAs, and IP bans. Focus on your data, we handle the rest.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl border border-ox-border bg-ox-card/50 p-8 transition-all hover:border-ox-accent/30 hover:bg-ox-card"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-3xl">{feature.icon}</span>
                <span
                  className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    feature.tag === "Core"
                      ? "bg-ox-accent/10 text-ox-accent"
                      : feature.tag === "Soon"
                        ? "bg-ox-purple/10 text-ox-purple"
                        : "bg-ox-blue/10 text-ox-blue"
                  }`}
                >
                  {feature.tag}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-ox-white">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-ox-muted">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
