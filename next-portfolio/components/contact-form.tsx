'use client';

import { FormEvent, useState } from 'react';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setStatus('sending');
    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(Object.fromEntries(form)) });
      if (!response.ok) throw new Error('Unable to send');
      event.currentTarget.reset(); setStatus('success'); setMessage('Thanks — your message is on its way.');
    } catch { setStatus('error'); setMessage('Message delivery is unavailable. Please email me directly instead.'); }
  }
  return <form onSubmit={submit} className="space-y-4 rounded-2xl border border-ink/10 bg-white/45 p-6 dark:border-white/10 dark:bg-white/[.03]">
    <div className="grid gap-4 sm:grid-cols-2"><label className="text-sm font-semibold">Name<input required name="name" className="mt-2 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2.5 font-normal dark:border-white/20" /></label><label className="text-sm font-semibold">Email<input required type="email" name="email" className="mt-2 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2.5 font-normal dark:border-white/20" /></label></div>
    <label className="block text-sm font-semibold">Message<textarea required name="message" rows={5} className="mt-2 w-full rounded-lg border border-ink/15 bg-transparent px-3 py-2.5 font-normal dark:border-white/20" /></label>
    <button disabled={status === 'sending'} className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-paper transition hover:bg-clay disabled:opacity-60 dark:bg-paper dark:text-ink">{status === 'sending' ? 'Sending…' : 'Send message'}</button>
    {message && <p className={status === 'error' ? 'text-sm text-clay' : 'text-sm text-moss dark:text-[#91c59b]'} role="status">{message}</p>}
  </form>;
}
