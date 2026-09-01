import { ThemeToggle } from '@/components/theme-toggle';

const links = [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Certifications', '/certifications'], ['Contact', '/contact']];

export function SiteHeader({ active }: { active: string }) {
  return <header className="site-header section-shell sticky top-0 z-20 flex h-14 items-center justify-end gap-3 bg-paper/90 backdrop-blur dark:bg-[#11100f]/90"><nav className="flex min-w-0 flex-wrap items-center justify-end gap-x-2.5 gap-y-1 text-[9px] lowercase tracking-normal text-ink/70 sm:gap-x-4" aria-label="Primary">{links.map(([label, href]) => <a key={href} className={`site-nav-link transition-colors hover:text-clay ${active === href ? 'text-clay' : ''}`} href={href}>{label}</a>)}</nav><ThemeToggle /></header>;
}
