'use client';

import { usePathname } from 'next/navigation';
import { SiteHeader } from '@/components/site-header';

export function SiteHeaderShell() {
  const pathname = usePathname();
  return <SiteHeader active={pathname} />;
}
