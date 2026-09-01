import { ProjectCard } from '@/components/project-card';
import { Reveal } from '@/components/reveal';
import { SmoothScroll } from '@/components/smooth-scroll';
import { ThemeToggle } from '@/components/theme-toggle';
import { projects } from '@/lib/projects';

export default function ProjectsPage() {
  return <SmoothScroll><header className="section-shell sticky top-0 z-20 flex h-20 items-center justify-between gap-3 bg-paper/90 backdrop-blur dark:bg-[#101612]/90"><a href="/" className="font-display text-2xl font-semibold sm:text-3xl">Sarfraz<em className="text-clay">.</em></a><nav className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-wide sm:gap-6 sm:text-xs sm:tracking-widest" aria-label="Primary"><a href="/">Home</a><a href="/about">About</a><a className="text-clay" href="/projects">Projects</a><a href="/contact">Contact</a></nav><ThemeToggle /></header><main className="section-shell py-20 sm:py-28"><Reveal><p className="eyebrow">All projects</p><h1 className="mt-3 max-w-3xl font-display text-6xl leading-none sm:text-8xl">Products with a clear <em>point of view.</em></h1><p className="mt-7 max-w-2xl leading-8 text-ink/65 dark:text-white/65">A collection of production-minded product interfaces built around understandable state, meaningful motion, and the details needed for a release.</p></Reveal><div className="mt-14 grid gap-6 md:grid-cols-2">{projects.map((project, index) => <Reveal key={project.name}><ProjectCard project={project} index={index} /></Reveal>)}</div></main></SmoothScroll>;
}
