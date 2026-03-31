"use client";

import { useState } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

const FAQS = [
  {
    question: "Is this like Tornado Cash or a mixer?",
    answer:
      "No. Shield TX executes natively on Hyperliquid — same orderbook, same counterparties. Tornado Cash hides the transaction. Shield TX shields your position data while keeping execution fully on-chain and auditable. No obfuscation, no pooling of funds.",
  },
  {
    question: "Who controls my funds?",
    answer:
      "You do. Funds are locked in a smart contract on Arbitrum. Core operations — deposits, withdrawals, batch submissions — are permissionless and verified by zero-knowledge proofs. No admin key required. No one can block or censor your withdrawal once the proof is submitted.",
  },
  {
    question: "Why not just use multiple wallets?",
    answer:
      "Most traders already do. The problem: clustering tools like Arkham and Nansen link wallets through temporal correlation regardless — same funding patterns, same trade timing, shared gas sources. Shield TX breaks that linkability with a fresh, isolated account per trade.",
  },
  {
    question: "What are the fees?",
    answer:
      "5 bps on open, 5 bps on close. If a trade closes at a loss, only the 5 bps open fee applies — no exit fee on a losing trade. Copy traders are taking upwards of 15 bps from you per trade. The fee pays for itself many times over if execution parity holds.",
  },
  {
    question: "What pairs are supported?",
    answer:
      "ETH, BTC, SOL, and HYPE perpetuals. Up to 10x leverage. Same pairs as native Hyperliquid trading.",
  },
  {
    question: "Is there an API?",
    answer:
      "API access is on the roadmap post-MVP. If you're a builder or systematic trader, reach out directly — early access conversations are open.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <h2 className="text-3xl md:text-5xl font-bold text-shieldtx-text mb-12">
        Common questions.
      </h2>

      <div className="max-w-2xl divide-y divide-shieldtx-border border-t border-shieldtx-border">
        {FAQS.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-start justify-between gap-6 py-6 text-left cursor-pointer"
            >
              <span className="font-mono text-sm text-shieldtx-text">{faq.question}</span>
              <span className="font-mono text-shieldtx-green text-lg leading-none mt-0.5 flex-shrink-0">
                {open === i ? "−" : "+"}
              </span>
            </button>
            {open === i && (
              <p className="text-sm text-shieldtx-muted leading-relaxed pb-6">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
