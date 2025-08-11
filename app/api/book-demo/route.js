import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const company = String(body.company || "").trim();
    const email = String(body.email || "")
      .trim()
      .toLowerCase();
    const message = String(body.message || "").trim();

    if (
      !name ||
      !company ||
      !email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY;
    const TO_EMAIL = process.env.TO_EMAIL;

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
        from: "Bookings <bookings@yourdomain.com>",
        to: [TO_EMAIL],
        subject: "New Demo Booking",
        html: `
          <h2>New Demo Booking</h2>
          <p><b>Name:</b> ${escapeHtml(name)}</p>
          <p><b>Company:</b> ${escapeHtml(company)}</p>
          <p><b>Email:</b> ${escapeHtml(email)}</p>
          <p><b>Message:</b><br/>${escapeHtml(message || "-")}</p>
        `,
      }),
    });

    if (!res.ok) {
      const txt = await res.text();
      console.error("Resend error", txt);
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

function escapeHtml(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}
