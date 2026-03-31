"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { GlowButton } from "../ui/GlowButton";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isVaultPage = pathname === "/vaults";

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  const navLinks = isVaultPage
    ? [
        { label: "How It Works", id: "vault-how-it-works" },
        { label: "Trust", id: "vault-trust" },
        { label: "Pricing", id: "vault-pricing" },
      ]
    : [
        { label: "How It Works", id: "how-it-works" },
        { label: "Trust", id: "trust" },
        { label: "Pricing", id: "pricing" },
      ];

  const ctaLabel = isVaultPage ? "Check Your Vault" : "Check Your Exposure";
  const ctaTarget = isVaultPage ? "vault-checker" : "exposure-checker";

  const switcherLabel = isVaultPage ? "Traders" : "Vault Managers";
  const switcherHref = isVaultPage ? "/" : "/vaults";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-shieldtx-bg/80 backdrop-blur-md border-b border-shieldtx-border/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        <Link href="/" className="font-mono text-base md:text-lg font-bold tracking-[0.2em] text-shieldtx-text hover:text-shieldtx-green transition-colors">
          SHIELD TX
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-10">
          {isVaultPage && (
            <Link
              href={switcherHref}
              className="font-mono text-xs text-shieldtx-muted/60 hover:text-shieldtx-green transition-colors border border-shieldtx-border/50 px-3 py-1.5 hover:border-shieldtx-green/30"
            >
              {switcherLabel} &rarr;
            </Link>
          )}
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="font-mono text-sm text-shieldtx-muted hover:text-shieldtx-text transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <GlowButton size="md" onClick={() => scrollTo(ctaTarget)}>
            {ctaLabel}
          </GlowButton>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-shieldtx-muted p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {menuOpen ? (
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.5" />
            ) : (
              <>
                <path d="M2 5H18" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 10H18" stroke="currentColor" strokeWidth="1.5" />
                <path d="M2 15H18" stroke="currentColor" strokeWidth="1.5" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-shieldtx-border bg-shieldtx-bg px-6 py-4 space-y-4">
          {isVaultPage && (
            <Link
              href={switcherHref}
              onClick={() => setMenuOpen(false)}
              className="block font-mono text-xs text-shieldtx-muted/60 hover:text-shieldtx-green"
            >
              {switcherLabel} &rarr;
            </Link>
          )}
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="block font-mono text-xs text-shieldtx-muted hover:text-shieldtx-text cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <GlowButton size="md" onClick={() => scrollTo(ctaTarget)} className="w-full">
            {ctaLabel}
          </GlowButton>
        </div>
      )}
    </nav>
  );
}
