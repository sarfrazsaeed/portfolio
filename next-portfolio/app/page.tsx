import Image from 'next/image';
import { Experience } from '@/components/experience';
import { Reveal } from '@/components/reveal';
import { SiteHeader } from '@/components/site-header';
import { SocialLinks } from '@/components/social-links';
import { SmoothScroll } from '@/components/smooth-scroll';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sarfraz-saeed-b05297418', icon: 'linkedin' },
  { label: 'Calendly', href: 'https://calendly.com/sarfrazsaeed095/30min', icon: 'calendar' },
  { label: 'Email', href: 'mailto:sarfrazsaeed095@gmail.com', icon: 'mail' },
  { label: 'GitHub', href: 'https://github.com/sarfrazsaeed', icon: 'github' },
  { label: 'Fiverr', href: 'https://www.fiverr.com/s/o8RPzzG', icon: 'fiverr' },
  { label: 'X', href: 'https://x.com/web_dev4', icon: 'twitter' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~010ac1b04029161d54?mp_source=share', icon: 'upwork' }
];

export default function HomePage() {
  return <SmoothScroll><SiteHeader active="/" /><main>
    <section className="section-shell grid gap-10 border-b border-ink/10 py-20 dark:border-white/10 sm:py-24 lg:grid-cols-[1fr_124px] lg:items-center lg:gap-14"><Reveal><p className="eyebrow">Frontend engineer</p><h1 className="mt-4 font-display text-5xl leading-[.92] sm:text-6xl">Sarfraz<br /><em>Saeed</em></h1><p className="mt-5 text-[11px] text-ink/55 dark:text-white/60">Islamabad, Pakistan</p><p className="mt-8 max-w-xs text-xs leading-5 text-ink/65 dark:text-white/70">Frontend engineer building fast, thoughtful products with React, TypeScript, and AI-assisted engineering.</p><div className="mt-6 flex flex-wrap items-center gap-3"><a href="/SarfrazResume.pdf" target="_blank" rel="noreferrer" className="rounded-full border border-ink/15 px-3 py-1.5 text-[10px] font-bold dark:border-white/20">Resume ↗</a><SocialLinks links={socialLinks} /></div></Reveal><Reveal className="w-full max-w-[124px]"><Image src="/headshot.png" alt="Sarfraz Saeed" width={960} height={1200} priority className="rounded-xl border border-ink/10 object-cover dark:border-white/10" /></Reveal></section>
    <Experience />
    <section className="section-shell border-t border-ink/10 py-16 dark:border-white/10 sm:py-20"><Reveal><div className="flex items-end justify-between gap-5"><div><p className="eyebrow">Keep exploring</p><h2 className="mt-3 font-display text-3xl">More of the <em>work.</em></h2></div><a href="/projects" className="link-underline text-[10px] font-bold">Projects ↗</a></div><p className="mt-5 max-w-xs text-xs leading-5 text-ink/60 dark:text-white/65">Browse the interfaces I’ve built, or see the credentials behind the practice.</p><div className="mt-4 flex gap-4 text-[10px] font-bold"><a className="link-underline" href="/certifications">Certifications ↗</a><a className="link-underline" href="/contact">Contact ↗</a></div></Reveal></section>
  </main></SmoothScroll>;
}
