'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => { const saved = localStorage.getItem('theme'); const next = saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches; setDark(next); document.documentElement.classList.toggle('dark', next); }, []);
  function toggle() { const next = !dark; setDark(next); document.documentElement.classList.toggle('dark', next); localStorage.setItem('theme', next ? 'dark' : 'light'); }
  return <button onClick={toggle} className="border-0 p-0 text-[11px] text-clay transition-transform hover:rotate-12" aria-label="Toggle color theme">{dark ? '☼' : '☾'}</button>;
}
