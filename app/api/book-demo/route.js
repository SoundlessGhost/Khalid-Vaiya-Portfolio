import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || body.workEmail || "")
      .trim()
      .toLowerCase();
    const message = String(body.message || "").trim();
    const company = String(body.company || "").trim(); // optional

    if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = "shahedmk47@gmail.com";

    if (!RESEND_API_KEY || !TO_EMAIL) {
      console.warn("Missing RESEND_API_KEY or TO_EMAIL; logging instead.");
      console.log({ name, company, email, message });
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // keep this until your domain is verified
        to: [TO_EMAIL],
        subject: "New Demo Booking",
        html: `
          <h2>New Demo Booking</h2>
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          ${company ? `<p><b>Company:</b> ${escapeHtml(company)}</p>` : ""}
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Message:</b><br/>${escapeHtml(message || "-")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const txt = await res.text();
      console.error("Resend error", res.status, txt);
      return NextResponse.json(
        { error: `Email failed: ${res.status} ${txt}` },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
