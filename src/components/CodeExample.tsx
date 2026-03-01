export function CodeExample() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-2xl font-bold text-ox-white md:text-3xl">
            One API call. That&apos;s it.
          </h2>
          <p className="text-ox-muted">
            Send a URL, get clean HTML back. JavaScript rendered, anti-bot bypassed, proxies rotated — automatically.
          </p>
        </div>

        {/* Code block */}
        <div className="code-block glow-orange">
          <div className="code-header">
            <div className="code-dot bg-[#ff5f57]" />
            <div className="code-dot bg-[#ffbd2e]" />
            <div className="code-dot bg-[#28c840]" />
            <span className="ml-3 text-xs text-ox-muted font-mono">request.py</span>
          </div>
          <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed">
            <code>
              <span className="text-ox-purple">import</span>
              <span className="text-ox-text"> requests</span>
              {"\n\n"}
              <span className="text-ox-muted"># One request. HTML back. Done.</span>
              {"\n"}
              <span className="text-ox-text">response </span>
              <span className="text-ox-accent">=</span>
              <span className="text-ox-text"> requests.</span>
              <span className="text-ox-blue">get</span>
              <span className="text-ox-text">(</span>
              {"\n"}
              <span className="text-ox-text">{"    "}</span>
              <span className="text-ox-green">&quot;https://api.scrapeox.io/v1/scrape&quot;</span>
              <span className="text-ox-text">,</span>
              {"\n"}
              <span className="text-ox-text">{"    "}params</span>
              <span className="text-ox-accent">=</span>
              <span className="text-ox-text">{"{"}</span>
              {"\n"}
              <span className="text-ox-text">{"        "}</span>
              <span className="text-ox-green">&quot;api_key&quot;</span>
              <span className="text-ox-text">: </span>
              <span className="text-ox-green">&quot;YOUR_API_KEY&quot;</span>
              <span className="text-ox-text">,</span>
              {"\n"}
              <span className="text-ox-text">{"        "}</span>
              <span className="text-ox-green">&quot;url&quot;</span>
              <span className="text-ox-text">: </span>
              <span className="text-ox-green">&quot;https://example.com/products&quot;</span>
              <span className="text-ox-text">,</span>
              {"\n"}
              <span className="text-ox-text">{"        "}</span>
              <span className="text-ox-green">&quot;render_js&quot;</span>
              <span className="text-ox-text">: </span>
              <span className="text-ox-blue">True</span>
              <span className="text-ox-text">,</span>
              {"\n"}
              <span className="text-ox-text">{"        "}</span>
              <span className="text-ox-green">&quot;country&quot;</span>
              <span className="text-ox-text">: </span>
              <span className="text-ox-green">&quot;us&quot;</span>
              {"\n"}
              <span className="text-ox-text">{"    "}{"}"}</span>
              {"\n"}
              <span className="text-ox-text">)</span>
              {"\n\n"}
              <span className="text-ox-text">html </span>
              <span className="text-ox-accent">=</span>
              <span className="text-ox-text"> response.text</span>
              {"\n"}
              <span className="text-ox-purple">print</span>
              <span className="text-ox-text">(</span>
              <span className="text-ox-green">f&quot;Got </span>
              <span className="text-ox-text">{"{"}</span>
              <span className="text-ox-purple">len</span>
              <span className="text-ox-text">(html)</span>
              <span className="text-ox-text">{"}"}</span>
              <span className="text-ox-green"> chars&quot;</span>
              <span className="text-ox-text">)</span>
              {"\n"}
              <span className="text-ox-muted"># Got 48239 chars</span>
            </code>
          </pre>
        </div>

        {/* Language tabs hint */}
        <p className="mt-4 text-center text-sm text-ox-muted">
          Available in Python, Node.js, cURL, Go, PHP, Ruby, Java
        </p>
      </div>
    </section>
  );
}
