const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    credits: "1,000",
    description: "Try before you buy",
    features: [
      "1,000 API credits / month",
      "JS rendering included",
      "Anti-bot bypass",
      "5 concurrent requests",
      "Community support",
    ],
    cta: "Get Started Free",
    ctaStyle: "border border-ox-border hover:border-ox-accent/50 hover:bg-ox-card",
    popular: false,
  },
  {
    name: "Starter",
    price: "$49",
    period: "/month",
    credits: "5,000",
    description: "For side projects & MVPs",
    features: [
      "5,000 API credits / month",
      "JS rendering included",
      "Anti-bot bypass",
      "Geotargeting (50 countries)",
      "10 concurrent requests",
      "Email support",
    ],
    cta: "Start Scraping",
    ctaStyle: "border border-ox-border hover:border-ox-accent/50 hover:bg-ox-card",
    popular: false,
  },
  {
    name: "Pro",
    price: "$99",
    period: "/month",
    credits: "15,000",
    description: "For growing businesses",
    features: [
      "15,000 API credits / month",
      "Everything in Starter",
      "Geotargeting (195 countries)",
      "25 concurrent requests",
      "Residential proxies",
      "Priority support",
      "Webhooks",
    ],
    cta: "Start Scraping",
    ctaStyle: "bg-ox-accent text-ox-black hover:bg-ox-accent-hover shadow-lg shadow-ox-accent/20",
    popular: true,
  },
  {
    name: "Business",
    price: "$249",
    period: "/month",
    credits: "50,000",
    description: "For serious data teams",
    features: [
      "50,000 API credits / month",
      "Everything in Pro",
      "50 concurrent requests",
      "Premium residential proxies",
      "Dedicated account manager",
      "Custom SLA",
      "AI extraction (coming soon)",
    ],
    cta: "Contact Sales",
    ctaStyle: "border border-ox-border hover:border-ox-accent/50 hover:bg-ox-card",
    popular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black text-ox-white md:text-4xl">
            Simple, predictable pricing
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-ox-muted">
            No hidden multipliers. No surprise bills. One API credit = one request, always.
            Failed requests are not charged.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-all ${
                plan.popular
                  ? "border-ox-accent/50 bg-ox-card glow-orange"
                  : "border-ox-border bg-ox-card/30 hover:border-ox-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-ox-accent px-4 py-1 text-xs font-bold text-ox-black">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-1 text-lg font-bold text-ox-white">
                  {plan.name}
                </h3>
                <p className="text-sm text-ox-muted">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-black text-ox-white">
                  {plan.price}
                </span>
                <span className="text-ox-muted">{plan.period}</span>
                <div className="mt-1 text-sm text-ox-accent font-medium">
                  {plan.credits} credits
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-ox-text"
                  >
                    <svg
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-ox-green"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/signup"
                className={`block rounded-xl px-6 py-3 text-center text-sm font-bold transition-all ${plan.ctaStyle}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Enterprise note */}
        <p className="mt-10 text-center text-sm text-ox-muted">
          Need more? <a href="mailto:sales@scrapeox.io" className="text-ox-accent hover:underline">Contact us</a> for custom enterprise plans with 100K+ credits.
        </p>
      </div>
    </section>
  );
}
