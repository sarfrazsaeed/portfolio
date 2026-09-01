'use client';

import { useState } from 'react';

const work = [
  { mark: 'FR', logo: 'flyrank', date: 'July 2026 - August 2026', company: 'FlyRank AI', role: 'Front-end AI Engineering Intern', website: 'https://internship.flyrank.ai/verify', points: ['Completed the Front-end AI Engineering internship programme.', 'Worked at the intersection of product UI and AI-assisted engineering.', 'Certificate ID: FR-D11-4351D-BFA04.'] },
  { mark: 'U', logo: 'upwork', date: '2025 - Present', company: 'Independent / Upwork', role: 'Frontend Engineer', website: 'https://www.upwork.com/freelancers/~010ac1b04029161d54?mp_source=share', points: ['Build responsive React and Next.js product interfaces for freelance opportunities.', 'Focus on readable state, purposeful motion, and release-ready details.'] }
];
const education = [
  { mark: 'AU', logo: 'air', date: 'In progress', company: 'Air University Islamabad', role: 'B.Sc. Computer Science', website: 'https://www.au.edu.pk/', points: ['Undergraduate Computer Science student.', 'Building practical depth in frontend engineering, APIs, and AI systems.'] },
  { mark: 'M', logo: 'meta', date: '2026 - In progress', company: 'Meta / Coursera', role: 'Meta Full Stack Developer Specialization', website: 'https://www.coursera.org/professional-certificates/meta-full-stack-developer', points: ['Coursework spanning JavaScript, React, Python, Django, and backend fundamentals.'] }
];

export function Experience() {
  const [active, setActive] = useState<'work' | 'education'>('work');
  const items = active === 'work' ? work : education;
  return <section className="section-shell py-16 sm:py-20"><p className="font-display text-2xl">Experience</p><div className="mt-5 overflow-hidden rounded-lg border border-ink/10 dark:border-white/10"><div className="experience-tabs grid grid-cols-2 p-0.5 text-[10px]">{(['work', 'education'] as const).map((tab) => <button key={tab} onClick={() => setActive(tab)} className={`experience-tab py-1.5 capitalize ${active === tab ? 'is-active' : ''}`} aria-pressed={active === tab}>{tab}</button>)}</div><div className="divide-y divide-ink/10 dark:divide-white/10">{items.map((item) => <article key={item.company} className="flex gap-3 p-4"><span className={`flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full text-[8px] font-extrabold ${item.logo === 'flyrank' ? 'bg-[#e2f4ed] text-[#116149] dark:bg-[#123a2d] dark:text-[#9ee3c6]' : item.logo === 'upwork' ? 'bg-[#14a800] text-white' : item.logo === 'meta' ? 'bg-[#0668e1] text-white' : 'bg-[#173f68] text-white'}`}>{item.mark}</span><div className="min-w-0"><p className="text-[8px] text-ink/60 dark:text-white/80">{item.date}</p><h3 className="mt-0.5 text-xs font-extrabold text-ink dark:text-white">{item.company}</h3><p className="text-[9px] text-ink/65 dark:text-white/80">{item.role}</p><ul className="mt-2 space-y-1 text-[9px] leading-4 text-ink/75 dark:text-white/85">{item.points.map((point) => <li key={point}>• {point}</li>)}</ul><a href={item.website} target="_blank" rel="noreferrer" className="mt-2 inline-block rounded bg-clay px-2 py-0.5 text-[8px] font-bold text-white">{item.company} ↗</a></div></article>)}</div></div></section>;
}
