"use client";

import { useState } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { GlowButton } from "../ui/GlowButton";
import { VOLUME_RANGES } from "@/lib/constants";

const INVITE_CODE = "SHIELDFIRST";

type View = "code" | "form" | "waitlist";

export function CTASection() {
  const [view, setView] = useState<View>("code");
  const [inviteCode, setInviteCode] = useState("");
  const [codeError, setCodeError] = useState(false);

  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [volumeRange, setVolumeRange] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function handleCodeSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (inviteCode.trim().toUpperCase() === INVITE_CODE) {
      setCodeError(false);
      setView("form");
    } else {
      setCodeError(true);
    }
  }

  async function handleSignupSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!address.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: address.trim(),
          email: email.trim() || undefined,
          volumeRange: volumeRange || undefined,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setMessage(data.message);
      setStatus("success");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  async function handleWaitlistSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!address.trim() || !email.trim()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          address: address.trim(),
          email: email.trim(),
          waitlist: true,
        }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit");
      }

      setMessage("You're on the list. We'll reach out if a spot opens.");
      setStatus("success");
    } catch (err) {
      setMessage(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  return (
    <SectionWrapper id="cta">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-shieldtx-text mb-4">
          Your edge. Your trades. No audience.
        </h2>
        <p className="text-lg text-shieldtx-muted mb-12">
          Private beta. Invite only.
        </p>

        {status === "success" ? (
          <div className="border border-shieldtx-green/30 bg-shieldtx-green/5 p-8 font-mono text-shieldtx-green">
            {message}
          </div>
        ) : view === "code" ? (
          <form onSubmit={handleCodeSubmit} className="space-y-4 text-left">
            <div>
              <label className="font-mono text-xs text-shieldtx-muted uppercase tracking-wider block mb-2">
                Invite code
              </label>
              <input
                type="text"
                value={inviteCode}
                onChange={(e) => { setInviteCode(e.target.value); setCodeError(false); }}
                placeholder="Enter your invite code"
                spellCheck={false}
                autoComplete="off"
                className="w-full bg-shieldtx-surface border border-shieldtx-border px-4 py-3.5 font-mono text-sm text-shieldtx-text placeholder:text-shieldtx-muted/50 focus:outline-none focus:border-shieldtx-green/50 transition-colors"
              />
              {codeError && (
                <p className="font-mono text-xs text-shieldtx-red mt-2">Invalid code.</p>
              )}
            </div>

            <GlowButton
              type="submit"
              size="lg"
              disabled={!inviteCode.trim()}
              className="w-full"
            >
              Enter
            </GlowButton>

            <p className="font-mono text-xs text-shieldtx-muted text-center pt-2">
              Don&apos;t have a code?{" "}
              <button
                type="button"
                onClick={() => setView("waitlist")}
                className="text-shieldtx-green hover:underline cursor-pointer"
              >
                Join the waitlist
              </button>
            </p>
          </form>
        ) : view === "form" ? (
          <form onSubmit={handleSignupSubmit} className="space-y-4 text-left">
            <div>
              <label className="font-mono text-xs text-shieldtx-muted uppercase tracking-wider block mb-2">
                Wallet address *
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="0x..."
                required
                spellCheck={false}
                autoComplete="off"
                className="w-full bg-shieldtx-surface border border-shieldtx-border px-4 py-3.5 font-mono text-sm text-shieldtx-text placeholder:text-shieldtx-muted/50 focus:outline-none focus:border-shieldtx-green/50 transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-shieldtx-muted uppercase tracking-wider block mb-2">
                Email (optional)
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full bg-shieldtx-surface border border-shieldtx-border px-4 py-3.5 font-mono text-sm text-shieldtx-text placeholder:text-shieldtx-muted/50 focus:outline-none focus:border-shieldtx-green/50 transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-shieldtx-muted uppercase tracking-wider block mb-2">
                Monthly volume
              </label>
              <select
                value={volumeRange}
                onChange={(e) => setVolumeRange(e.target.value)}
                className="w-full bg-shieldtx-surface border border-shieldtx-border px-4 py-3.5 font-mono text-sm text-shieldtx-text focus:outline-none focus:border-shieldtx-green/50 transition-colors appearance-none cursor-pointer"
              >
                <option value="">Select range</option>
                {VOLUME_RANGES.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>

            {status === "error" && (
              <p className="font-mono text-sm text-shieldtx-red">{message}</p>
            )}

            <GlowButton
              type="submit"
              size="lg"
              disabled={status === "loading" || !address.trim()}
              className="w-full mt-4"
            >
              {status === "loading" ? "Submitting..." : "Request Access"}
            </GlowButton>
          </form>
        ) : (
          <form onSubmit={handleWaitlistSubmit} className="space-y-4 text-left">
            <p className="text-sm text-shieldtx-muted mb-6 text-center">
              If we can accommodate demand, we&apos;ll whitelist your wallet and email you to
              notify you. We don&apos;t save or link this information to your identity.
            </p>

            <div>
              <label className="font-mono text-xs text-shieldtx-muted uppercase tracking-wider block mb-2">
                Wallet address *
              </label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="0x..."
                required
                spellCheck={false}
                autoComplete="off"
                className="w-full bg-shieldtx-surface border border-shieldtx-border px-4 py-3.5 font-mono text-sm text-shieldtx-text placeholder:text-shieldtx-muted/50 focus:outline-none focus:border-shieldtx-green/50 transition-colors"
              />
            </div>

            <div>
              <label className="font-mono text-xs text-shieldtx-muted uppercase tracking-wider block mb-2">
                Email *
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                className="w-full bg-shieldtx-surface border border-shieldtx-border px-4 py-3.5 font-mono text-sm text-shieldtx-text placeholder:text-shieldtx-muted/50 focus:outline-none focus:border-shieldtx-green/50 transition-colors"
              />
            </div>

            {status === "error" && (
              <p className="font-mono text-sm text-shieldtx-red">{message}</p>
            )}

            <GlowButton
              type="submit"
              size="lg"
              disabled={status === "loading" || !address.trim() || !email.trim()}
              className="w-full mt-4"
            >
              {status === "loading" ? "Submitting..." : "Join Waitlist"}
            </GlowButton>

            <p className="font-mono text-xs text-shieldtx-muted text-center pt-2">
              Have a code?{" "}
              <button
                type="button"
                onClick={() => setView("code")}
                className="text-shieldtx-green hover:underline cursor-pointer"
              >
                Enter it here
              </button>
            </p>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}
