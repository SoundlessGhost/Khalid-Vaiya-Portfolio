"use client";

import { useEffect, useState } from "react";

export default function BookDemoToast() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState("terms");
  const [agree, setAgree] = useState(false);

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [status, setStatus] = useState("idle");
  const [err, setErr] = useState("");

  const onOpen = () => {
    setOpen(true);
    setStep("terms");
    setAgree(false);
    setStatus("idle");
    setErr("");
  };

  const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const validate = () => {
    if (!name.trim()) return "Please enter your name";
    if (!company.trim()) return "Please enter your company";
    if (!isEmail(email)) return "Please enter a valid email";
    return "";
  };

  const onEmailChange = (v) => {
    setEmail(v.toLowerCase());
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (v) {
      setErr(v);
      return;
    }
    setStatus("loading");
    setErr("");

    try {
      const res = await fetch("/api/book-demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim(),
          email: email.trim().toLowerCase(),
          message: msg.trim(),
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setStep("done");

      setName("");
      setCompany("");
      setEmail("");
      setMsg("");

      setTimeout(() => setOpen(false), 1600);
    } catch (e) {
      setStatus("error");
      setErr("Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        onClick={onOpen}
        className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium text-white bg-gradient-to-br from-emerald-500 to-cyan-500 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(16,185,129,0.35)] transition active:scale-95"
      >
        Book a Demo
      </button>

      {open && (
        <div className="fixed inset-0 z-[60] pointer-events-none">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-100 animate-fadeIn pointer-events-auto"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div
            role="dialog"
            aria-modal="true"
            className="pointer-events-auto fixed bottom-6 right-6 w-[380px] max-w-[95vw] rounded-2xl border border-white/10 bg-neutral-900/90 text-white shadow-[0_24px_80px_-12px_rgba(34,197,94,0.35)] animate-slideUp"
          >
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
              <div>
                <p className="text-sm font-semibold">
                  {step === "terms" && "Before we book…"}
                  {step === "form" && "Book your free demo"}
                  {step === "done" && "Thanks!"}
                </p>
                <p className="text-xs text-white/60">
                  {step === "terms" && "Please review and agree to continue"}
                  {step === "form" && "Tell us a bit about you"}
                  {step === "done" && "We’ll email you the details shortly"}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/70 hover:text-white rounded-md px-2 py-1"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="p-4">
              {step === "terms" && (
                <div className="space-y-4">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-sm text-white/80">
                    <ul className="space-y-2">
                      <li className="flex gap-2">
                        <span>✅</span>
                        <span>
                          We’ll use your info to schedule and send reminders.
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>✅</span>
                        <span>
                          Demo may be recorded for QA (you can opt out).
                        </span>
                      </li>
                      <li className="flex gap-2">
                        <span>✅</span>
                        <span>
                          By continuing, you agree to our{" "}
                          <a
                            className="underline decoration-dotted"
                            href="/terms"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Terms
                          </a>{" "}
                          &{" "}
                          <a
                            className="underline decoration-dotted"
                            href="/privacy"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Privacy
                          </a>
                          .
                        </span>
                      </li>
                    </ul>
                  </div>

                  <label className="flex items-start gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={agree}
                      onChange={(e) => setAgree(e.target.checked)}
                      className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5"
                    />
                    <span>I agree to the terms & conditions</span>
                  </label>

                  <div className="flex gap-2">
                    <button
                      disabled={!agree}
                      onClick={() => setStep("form")}
                      className={`flex-1 rounded-xl px-4 py-2 font-medium ring-1 ring-white/10 transition ${
                        agree
                          ? "bg-gradient-to-br from-emerald-500 to-cyan-500 text-white"
                          : "bg-white/10 text-white/50"
                      }`}
                    >
                      Continue
                    </button>
                    <button
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-2 bg-white/5 text-white/80 ring-1 ring-white/10"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}

              {step === "form" && (
                <form onSubmit={onSubmit} className="space-y-3">
                  {status === "error" && (
                    <div className="rounded-lg border border-rose-400/30 bg-rose-500/10 p-2 text-sm text-rose-200">
                      {err}
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-xs text-white/70">Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400/40"
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-white/70">Company</label>
                    <input
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400/40"
                      placeholder="Your company"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-white/70">
                      Business email
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => onEmailChange(e.target.value)}
                      className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400/40"
                      placeholder="name@company.com"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs text-white/70">
                      Message (optional)
                    </label>
                    <textarea
                      rows={3}
                      value={msg}
                      onChange={(e) => setMsg(e.target.value)}
                      className="w-full resize-none rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-400/40"
                      placeholder="What do you need?"
                    />
                  </div>

                  <button
                    disabled={status === "loading"}
                    className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-cyan-500 px-4 py-2.5 text-white font-medium ring-1 ring-white/10"
                  >
                    <span
                      className={`${
                        status === "loading" ? "opacity-0" : "opacity-100"
                      } transition`}
                    >
                      Submit
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
                </form>
              )}

              {step === "done" && (
                <div className="rounded-xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm text-emerald-200 animate-scaleIn">
                  ✅ Thanks! Your request has been received. We’ll email you
                  shortly.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
