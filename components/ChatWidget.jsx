"use client";

import { useState } from "react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState("idle");
  const [err, setErr] = useState("");

  const validate = () => {
    if (!name.trim()) return "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return "Please enter a valid email";
    return "";
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setErr(v);
      return;
    }
    setErr("");
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: msg }),
      });
      if (!res.ok) throw new Error("failed");
      setStatus("success");
      setName("");
      setEmail("");
      setMsg("");
      setTimeout(() => setOpen(false), 1500);
    } catch (e) {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Floating Launcher – emerald/teal to match navbar/hero */}
      <button
        aria-label="Open contact chat"
        onClick={() => setOpen(!open)}
        className={`fixed cursor-pointer bottom-6 right-6 z-[60] h-14 w-14 rounded-2xl
          bg-gradient-to-br from-emerald-500 to-cyan-500 text-white
          shadow-[0_10px_30px_rgba(16,185,129,0.35)] grid place-items-center transition active:scale-95
          ring-1 ring-white/10 ${open ? "" : "animate-breathe"}`}
      >
        <div className="relative p-1">
          {/* chat icon smaller */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12a8 8 0 1 1-3.2-6.4L22 4l-1 4.1A7.9 7.9 0 0 1 21 12Z"
              stroke="white"
              strokeWidth="1.6"
            />
            <circle cx="9" cy="12" r="1" fill="white" />
            <circle cx="13" cy="12" r="1" fill="white" />
            <circle cx="17" cy="12" r="1" fill="white" />
          </svg>
          {!open && (
            <span className="absolute -right-2 -top-2 h-2.5 w-2.5 rounded-full bg-lime-400 animate-ping" />
          )}
        </div>
      </button>

      {/* Panel */}
      {open && (
        <div
          className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[92vw] animate-slideUp"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative overflow-hidden rounded-3xl border border-cyan-300/10 bg-neutral-900/80 backdrop-blur-xl shadow-[0_20px_60px_-10px_rgba(34,197,94,0.35)]">
            <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(1px_1px_at_20px_20px,white,transparent_0)] [background-size:40px_40px]" />
            <div className="pointer-events-none absolute -right-16 -bottom-16 h-40 w-40 rounded-full bg-emerald-400/20 blur-2xl animate-blob" />
            <div
              className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-cyan-400/20 blur-2xl animate-blob"
              style={{ animationDelay: "-2s" }}
            />

            {/* Header */}
            <div className="relative flex items-center gap-3 px-5 py-3 border-b border-white/10">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-emerald-500 to-cyan-500 grid place-items-center text-white ring-1 ring-white/10">
                <span className="font-bold text-xs">FS</span>
              </div>
              <div className="flex-1">
                <span className="text-emerald-400 font-bold">Fast</span>
                <span className="text-white font-bold">scraping</span>
                <p className="text-xs text-white/60">
                  Tell us a bit & we’ll email you back
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* Body / Form */}
            <form onSubmit={onSubmit} className="relative p-5 space-y-3">
              {status === "success" ? (
                <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-200">
                  ✅ Thanks! Your info has been sent.
                </div>
              ) : status === "error" ? (
                <div className="rounded-xl border border-rose-400/30 bg-rose-500/10 p-4 text-sm text-rose-200">
                  ❌ Something went wrong. Please try again later.
                </div>
              ) : null}

              <div className="space-y-1.5">
                <label className="text-xs text-white/70">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400/40"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-white/70">Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value.toLocaleLowerCase())}
                  type="email"
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400/40"
                  placeholder="Your email"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs text-white/70">
                  Message (optional)
                </label>
                <textarea
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  rows={3}
                  className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm text-white placeholder-white/40 outline-none resize-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400/40"
                  placeholder="What do you need?"
                />
              </div>

              {err && <p className="text-rose-300 text-xs">{err}</p>}

              <button
                disabled={status === "loading"}
                className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 to-cyan-500 px-4 py-2.5 text-white font-medium focus:outline-none ring-1 ring-white/10"
              >
                <span
                  className={`cursor-pointer ${
                    status === "loading" ? "opacity-0" : "opacity-100"
                  } transition`}
                >
                  Send
                </span>
                {status === "loading" && (
                  <span className="absolute inset-0 grid place-items-center">
                    <svg
                      className="h-5 w-5 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        d="M4 12a8 8 0 018-8"
                        stroke="white"
                        strokeWidth="4"
                      />
                    </svg>
                  </span>
                )}
              </button>
              <p className="text-[11px] text-white/50 text-center">
                Prefer a call?{" "}
                <span className="text-emerald-300">Book a demo</span> from the
                top right.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
