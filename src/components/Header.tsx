export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-ox-border/50 bg-ox-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-ox-accent font-black text-ox-black text-sm">
            OX
          </div>
          <span className="text-lg font-bold text-ox-white">Scrapeox</span>
        </a>

        {/* Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-ox-muted transition-colors hover:text-ox-white"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-sm text-ox-muted transition-colors hover:text-ox-white"
          >
            Pricing
          </a>
          <a
            href="#how-it-works"
            className="text-sm text-ox-muted transition-colors hover:text-ox-white"
          >
            How It Works
          </a>
          <a
            href="https://docs.scrapeox.io"
            className="text-sm text-ox-muted transition-colors hover:text-ox-white"
          >
            Docs
          </a>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="/login"
            className="hidden text-sm text-ox-muted transition-colors hover:text-ox-white sm:block"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="rounded-lg bg-ox-accent px-4 py-2 text-sm font-semibold text-ox-black transition-all hover:bg-ox-accent-hover hover:shadow-lg hover:shadow-ox-accent/20"
          >
            Get API Key — Free
          </a>
        </div>
      </div>
    </header>
  );
}
