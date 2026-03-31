"use client";

import { SectionWrapper } from "../../ui/SectionWrapper";

export function VaultPricingSection() {
  return (
    <SectionWrapper id="vault-pricing">
      <h2 className="text-3xl md:text-5xl font-bold text-shieldtx-text mb-4">
        Strategy leakage costs more than shielded execution.
      </h2>
      <p className="text-lg text-shieldtx-muted mb-12">
        Simple per-trade fees. No subscriptions.
      </p>

      <div className="max-w-2xl border border-shieldtx-border bg-shieldtx-surface">
        <div className="divide-y divide-shieldtx-border">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-mono text-sm text-shieldtx-muted">On open</span>
            <span className="font-mono text-lg font-bold text-shieldtx-text">5 bps</span>
          </div>
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-mono text-sm text-shieldtx-muted">On close (profit)</span>
            <span className="font-mono text-lg font-bold text-shieldtx-text">5 bps</span>
          </div>
          <div className="flex items-center justify-between px-6 py-5">
            <div>
              <span className="font-mono text-sm text-shieldtx-muted">On close (loss)</span>
              <p className="font-mono text-xs text-shieldtx-muted/60 mt-1">Only the open fee applies</p>
            </div>
            <span className="font-mono text-lg font-bold text-shieldtx-green">0 bps</span>
          </div>
        </div>
        <div className="border-t border-shieldtx-border px-6 py-5 space-y-1">
          <p className="font-mono text-xs text-shieldtx-muted">
            Round-trip on a winning trade: <span className="text-shieldtx-text">10 bps</span>
          </p>
          <p className="font-mono text-xs text-shieldtx-muted">
            Round-trip on a losing trade: <span className="text-shieldtx-text">5 bps</span>
          </p>
        </div>
      </div>

      <p className="font-mono text-xs text-shieldtx-green mt-8">Free during private beta</p>
    </SectionWrapper>
  );
}
