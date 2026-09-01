import type { Metadata } from 'next';
import './globals.css';

const siteUrl = 'https://sarfraz-portfolio.vercel.app';
const description = 'Frontend engineer building fast, production-ready React and Next.js systems with TypeScript, motion, state management, and an expanding AI engineering practice.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Sarfraz Saeed — Frontend Engineer',
  description,
  openGraph: { type: 'website', siteName: 'Sarfraz Saeed — Portfolio', title: 'Sarfraz Saeed — Frontend Engineer', description, url: siteUrl },
  twitter: { card: 'summary', title: 'Sarfraz Saeed — Frontend Engineer', description }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><head><script dangerouslySetInnerHTML={{ __html: "try { var theme = localStorage.getItem('theme'); if (theme === 'dark' || (!theme && matchMedia('(prefers-color-scheme: dark)').matches)) document.documentElement.classList.add('dark'); } catch (error) {}" }} /><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600;1,700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" /></head><body>{children}</body></html>;
}
