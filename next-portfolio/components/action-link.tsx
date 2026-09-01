import type { ReactNode } from 'react';

type ActionLinkProps = { href: string; label: string; kind: 'website' | 'github' | 'certificate'; children?: ReactNode };

function ActionIcon({ kind }: { kind: ActionLinkProps['kind'] }) {
  if (kind === 'github') return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-4 .9-4-2-5-2m10 4v-3.9c0-1 .1-1.4-.5-2.1 1.7-.2 3.5-.8 3.5-3.8 0-.8-.3-1.5-.8-2 .1-.2.4-1-.1-2.1 0 0-.7-.2-2.2.8a7.6 7.6 0 0 0-4 0C8.4 5 7.7 5.2 7.7 5.2c-.5 1.1-.2 1.9-.1 2.1-.5.5-.8 1.2-.8 2 0 3 1.8 3.6 3.5 3.8-.6.5-.6 1-.5 1.7V18" /></svg>;
  if (kind === 'website') return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="8.5" /><path d="M3.8 12h16.4M12 3.5c2.2 2.4 3.2 5.2 3.2 8.5s-1 6.1-3.2 8.5c-2.2-2.4-3.2-5.2-3.2-8.5S9.8 5.9 12 3.5Z" /></svg>;
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 5h5v5M19 5l-9 9" /><path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4" /></svg>;
}

export function ActionLink({ href, label, kind, children }: ActionLinkProps) {
  return <a href={href} target="_blank" rel="noreferrer" className={`action-link action-link-${kind}`}>{children ?? label}<ActionIcon kind={kind} /></a>;
}
