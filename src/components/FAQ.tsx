const faqs = [
  {
    q: "What counts as one API credit?",
    a: "One API request = one credit. No multipliers for JS rendering, proxy type, or anti-bot bypass. What you see is what you pay.",
  },
  {
    q: "Do I get charged for failed requests?",
    a: "No. If we can't deliver the page (timeout, block, error), the credit is not deducted. You only pay for successful responses.",
  },
  {
    q: "What anti-bot systems can you bypass?",
    a: "Cloudflare (including Turnstile), DataDome, Akamai, PerimeterX, hCaptcha, and most custom anti-bot solutions. Our proprietary browser engine is not based on Chromium, making it harder to detect.",
  },
  {
    q: "How fast are responses?",
    a: "Simple requests: 1-3 seconds. JS rendering: 3-8 seconds. Protected sites with anti-bot bypass: 5-12 seconds. We optimize for reliability over raw speed.",
  },
  {
    q: "Do unused credits roll over?",
    a: "Credits reset monthly. We keep pricing low by not carrying over unused capacity.",
  },
  {
    q: "Can I scrape JavaScript-heavy sites (SPAs)?",
    a: "Yes. Full browser rendering with our custom engine. React, Vue, Angular, dynamic content, infinite scrolls — all rendered before returning HTML.",
  },
  {
    q: "What output formats do you support?",
    a: "Raw HTML by default. JSON extraction with CSS selectors or XPath is available. AI-powered structured extraction is coming soon.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes. 1,000 free credits every month, forever. No credit card required. Just sign up and start scraping.",
  },
];

export function FAQ() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-black text-ox-white md:text-4xl">
            Frequently asked questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-xl border border-ox-border bg-ox-card/30 transition-all hover:border-ox-accent/30"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 text-left text-base font-semibold text-ox-white [&::-webkit-details-marker]:hidden">
                {faq.q}
                <svg
                  className="h-5 w-5 flex-shrink-0 text-ox-muted transition-transform group-open:rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </summary>
              <div className="px-6 pb-6 text-sm leading-relaxed text-ox-muted">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
