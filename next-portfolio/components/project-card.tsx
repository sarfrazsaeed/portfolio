import Image from 'next/image';
import type { projects } from '@/lib/projects';

type Project = (typeof projects)[number];

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return <article className="overflow-hidden rounded-lg border border-ink/10 bg-white/35 dark:border-white/10 dark:bg-white/[.03]">
    <div className="relative aspect-[1.45] overflow-hidden bg-mist dark:bg-white/10">
      <Image src={project.image} alt={`${project.name} project screenshot`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-top transition duration-500 hover:scale-[1.02]" />
      <span className="absolute bottom-2 right-2 rounded-full bg-paper/85 px-1.5 py-0.5 text-[9px] font-bold text-ink backdrop-blur">0{index + 1}</span>
    </div>
    <div className="p-3"><p className="text-[8px] font-bold uppercase leading-3 tracking-[.14em] text-clay">{project.label}</p><h2 className="mt-1 text-sm font-extrabold">{project.name}</h2><p className="mt-2 text-[9px] leading-4 text-ink/65 dark:text-white/65">{project.description}</p><div className="mt-3 flex flex-wrap gap-1">{project.tech.map((tag) => <span key={tag} className="rounded-full border border-ink/10 px-1.5 py-0.5 text-[8px] font-bold text-ink/65 dark:border-white/15 dark:text-white/70">{tag}</span>)}</div><div className="mt-3 flex gap-3 text-[9px] font-bold"><a className="link-underline" href={project.href} target="_blank" rel="noreferrer">Website ↗</a><a className="link-underline" href={project.github} target="_blank" rel="noreferrer">GitHub ↗</a></div></div>
  </article>;
}
