
export const COLORS = {
  bg: "#0A0A0F",
  surface: "#12121A",
  border: "#2A2A3A",
  text: "#E8E8F0",
  muted: "#8888A0",
  green: "#00FF88",
  red: "#FF3366",
  amber: "#FFB800",
} as const;


export const CYCLING_STATS = [
  { value: "12+", label: "copy-trading tools monitor HL wallets" },
  { value: "5-15 bps", label: "average alpha leakage per copied trade" },
  { value: "<2s", label: "average lag before your position is mirrored" },
  { value: "$0", label: "cost for anyone to query your open positions" },
];


export const VOLUME_RANGES = [
  "< $10K/mo",
  "$10K - $100K/mo",
  "$100K - $500K/mo",
  "$500K - $1M/mo",
  "$1M - $5M/mo",
  "$5M+/mo",
];

export const SOCIAL_PROOF = [
  {
    quote:
      "I'm running 5 wallets just to fragment my signal. It's exhausting.",
    persona: "whale, top 100 PnL",
  },
  {
    quote: "If it feels like HL with ghost mode, I'm in.",
    persona: "top 50 trader",
  },
  {
    quote: "Most privacy tools are clunky or sketchy. Make it easy.",
    persona: "DeFi trader, $2M+ vol",
  },
  {
    quote:
      "I'd pay 0.2-0.3% of volume. The copy-bots cost me more than that.",
    persona: "whale, $5M+ vol",
  },
];

// ============================================================
// Vault constants
// ============================================================

export const VAULT_AUM_RANGES = [
  "< $100K",
  "$100K - $500K",
  "$500K - $1M",
  "$1M - $5M",
  "$5M - $10M",
  "$10M+",
];


export const VAULT_SOCIAL_PROOF = [
  {
    quote:
      "I can see competing managers open the same positions within a minute of my vault. It's not a coincidence.",
    persona: "vault manager, $2.4M AUM",
  },
  {
    quote:
      "My commission is 10% but the free-riders extracting alpha from my strategy pay 0%. That math doesn't work.",
    persona: "vault manager, $800K AUM",
  },
  {
    quote:
      "I've considered closing the vault entirely. The strategy leakage costs more than the commission earns.",
    persona: "vault manager, $5M AUM",
  },
  {
    quote:
      "If I could choose what's visible and when, I'd triple my vault size overnight. Depositors want privacy too.",
    persona: "vault manager, $1.2M AUM",
  },
];

export const VAULT_CYCLING_STATS = [
  { value: "100%", label: "of vault positions are publicly queryable" },
  { value: "<45s", label: "for a competing manager to clone your trade" },
  { value: "$0", label: "cost to extract your full strategy in real-time" },
  { value: "0", label: "opt-out options within Hyperliquid's architecture" },
];
