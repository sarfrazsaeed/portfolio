import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    if (![name, email, message].every((value) => typeof value === 'string' && value.trim())) return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO_EMAIL || !process.env.CONTACT_FROM_EMAIL) return NextResponse.json({ error: 'Email service is not configured.' }, { status: 503 });
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({ from: process.env.CONTACT_FROM_EMAIL, to: process.env.CONTACT_TO_EMAIL, replyTo: email, subject: `Portfolio message from ${name}`, text: `From: ${name} <${email}>\n\n${message}` });
    if (error) return NextResponse.json({ error: 'Message could not be sent.' }, { status: 502 });
    return NextResponse.json({ ok: true });
  } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }); }
}
