type SocialLink = { label: string; href: string; icon: string };

const paths: Record<string, JSX.Element> = {
  linkedin: <><path d="M6 9v9" /><path d="M6 6.5v.01" /><path d="M10 18v-5a3 3 0 0 1 6 0v5" /><path d="M10 9v9" /></>,
  calendar: <><rect x="4" y="5" width="16" height="15" rx="2" /><path d="M8 3v4M16 3v4M4 10h16" /><path d="M8 14h.01M12 14h.01M16 14h.01" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m4 7 8 6 8-6" /></>,
  github: <><path d="M9 19c-4 .9-4-2-5-2m10 4v-3.9c0-1 .1-1.4-.5-2.1 1.7-.2 3.5-.8 3.5-3.8 0-.8-.3-1.5-.8-2 .1-.2.4-1-.1-2.1 0 0-.7-.2-2.2.8a7.6 7.6 0 0 0-4 0C8.4 5 7.7 5.2 7.7 5.2c-.5 1.1-.2 1.9-.1 2.1-.5.5-.8 1.2-.8 2 0 3 1.8 3.6 3.5 3.8-.6.5-.6 1-.5 1.7V18" /></>,
  fiverr: <><path d="M6 19V9h11" /><path d="M6 9c0-3 1.5-5 5-5h2" /><path d="M10 13h5" /><path d="M16 9v.01" /></>,
  twitter: <><path d="M20 7.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.4.7-2.1.8A3.3 3.3 0 0 0 11.7 9c0 .3 0 .5.1.8a9.4 9.4 0 0 1-6.8-3.5 3.3 3.3 0 0 0 1 4.4c-.5 0-1-.2-1.5-.4 0 1.6 1.1 3 2.7 3.3-.5.1-1 .1-1.5.1.4 1.3 1.7 2.3 3.2 2.3A6.7 6.7 0 0 1 4.8 17 9.4 9.4 0 0 0 10 18.5c6.2 0 9.7-5.2 9.7-9.7v-.4c.7-.5 1.2-1 1.6-1.6Z" /></>,
  upwork: <><path d="M5 12c1.5 2.2 3.1 3.3 4.7 3.3 2.4 0 4.2-2.2 5.2-6.3" /><path d="M15 9.2c.5 2.1 1.7 3.2 3.1 3.2 1.4 0 2.4-1 2.4-2.5 0-1.5-1-2.5-2.4-2.5-1.7 0-3.1 1.5-4.1 3.2L12 16" /></>
};

export function SocialLinks({ links, showLabels = false }: { links: SocialLink[]; showLabels?: boolean }) {
  return <div className="flex flex-wrap items-center gap-3" aria-label="Social links">{links.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith('mailto:') ? undefined : '_blank'} rel="noreferrer" className="group inline-flex items-center gap-1.5 text-ink/55 transition hover:text-clay dark:text-white/80" aria-label={link.label} title={link.label}><svg aria-hidden="true" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">{paths[link.icon]}</svg>{showLabels && <span className="text-[10px]">{link.label}</span>}</a>)}</div>;
}
