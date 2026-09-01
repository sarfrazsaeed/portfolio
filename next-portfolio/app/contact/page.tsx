import { ContactForm } from '@/components/contact-form';
import { Reveal } from '@/components/reveal';
import { SiteHeader } from '@/components/site-header';
import { SocialLinks } from '@/components/social-links';
import { SmoothScroll } from '@/components/smooth-scroll';

const links = [
  { label: 'Email', href: 'mailto:sarfrazsaeed095@gmail.com', icon: 'mail' },
  { label: 'Calendly', href: 'https://calendly.com/sarfrazsaeed095/30min', icon: 'calendar' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sarfraz-saeed-b05297418', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/sarfrazsaeed', icon: 'github' },
  { label: 'X', href: 'https://x.com/web_dev4', icon: 'twitter' },
  { label: 'Fiverr', href: 'https://www.fiverr.com/s/o8RPzzG', icon: 'fiverr' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~010ac1b04029161d54?mp_source=share', icon: 'upwork' },
  { label: 'Contra', href: 'https://contra.com/sarfraz_saeed_cgu5m8w9', icon: 'calendar' }
];

export default function ContactPage() {
  return <SmoothScroll><SiteHeader active="/contact" /><main className="section-shell py-20 sm:py-28"><div className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-start"><Reveal><p className="eyebrow">Let’s talk</p><h1 className="mt-3 max-w-lg font-display text-6xl leading-none sm:text-8xl">Good work starts with a <em>clear conversation.</em></h1><p className="mt-7 max-w-md leading-8 text-ink/65 dark:text-white/65">I’m available for thoughtful frontend, product, and AI-focused work. Book a short introduction, email me, or find me elsewhere.</p><div className="mt-9"><SocialLinks links={links} showLabels /></div></Reveal><Reveal><ContactForm /></Reveal></div></main></SmoothScroll>;
}
