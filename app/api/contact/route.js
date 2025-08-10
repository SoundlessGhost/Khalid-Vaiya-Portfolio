import nodemailer from "nodemailer";

import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family:Inter,system-ui,Segoe UI,Roboto,Arial">
        <h2>New Chat Lead</h2>
        <p><b>Name:</b> ${escapeHtml(name)}</p>
        <p><b>Email:</b> ${escapeHtml(email)}</p>
        ${message ? `<p><b>Message:</b> ${escapeHtml(message)}</p>` : ""}
        <hr/>
        <small>Sent from your site chat widget</small>
      </div>`;

    await transporter.sendMail({
      from: process.env.FROM_EMAIL, // e.g. "Bot <no-reply@yourdomain.com>"
      to: process.env.TO_EMAIL, // your inbox
      subject: `New chat lead: ${name}`,
      replyTo: email,
      html,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Email send failed." }, { status: 500 });
  }
}

// tiny HTML sanitizer
function escapeHtml(str) {
  return String(str).replace(
    /[&<>"']/g,
    (m) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      }[m])
  );
}
