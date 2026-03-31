"use client";

import { SectionWrapper } from "../ui/SectionWrapper";

const STEPS = [
  {
    number: "01",
    title: "Deposit",
    description:
      "Send USDC to the shielded vault on Arbitrum. Your balance becomes private shielded notes — only you can see them.",
  },
  {
    number: "02",
    title: "Open",
    description:
      "A fresh, unlinkable Hyperliquid account is created for this trade. Your identity and other positions are not connected to it.",
  },
  {
    number: "03",
    title: "Trade",
    description:
      "Execute directly on Hyperliquid's orderbook. Same liquidity, same fills as trading natively.",
  },
  {
    number: "04",
    title: "Close",
    description:
      "Close your position on Hyperliquid. Proceeds return to your shielded balance, unlinkable to the original trade.",
  },
  {
    number: "05",
    title: "Withdraw",
    description:
      "Burn shielded notes and withdraw USDC back to your wallet via a ZK-verified on-chain proof. No admin approval needed.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <h2 className="text-3xl md:text-5xl font-bold text-shieldtx-text mb-4">
        Same fills. No footprint.
      </h2>
      <p className="text-lg text-shieldtx-muted mb-12 max-w-2xl">
        Five steps between you and shielded execution.
      </p>

      <div className="grid md:grid-cols-5 gap-8">
        {STEPS.map((step) => (
          <div key={step.number} className="border border-shieldtx-border bg-shieldtx-surface p-6 md:p-8">
            <span className="font-mono text-shieldtx-green text-sm">{step.number}</span>
            <h3 className="text-xl font-bold text-shieldtx-text mt-3 mb-4">{step.title}</h3>
            <p className="text-sm text-shieldtx-muted leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs text-shieldtx-muted mt-12">
        Powered by Hyperliquid&apos;s execution engine. Not a wrapper. Not a bridge.
      </p>
    </SectionWrapper>
  );
}
