# Sarfraz Saeed — Next.js Portfolio

A responsive App Router portfolio built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, and Lenis. The original vanilla site remains at the repository root; this project lives independently in `next-portfolio/`.

## Run locally

```bash
cd next-portfolio
npm install
npm run dev
```

Open `http://localhost:3000`. Use `npm run build` to create a production build and `npm start` to run it locally.

## Contact delivery

The form posts to `app/api/contact/route.ts` and uses Resend. Copy `.env.example` to `.env.local`, then set:

```bash
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=sarfrazsaeed095@gmail.com
CONTACT_FROM_EMAIL=Portfolio <your-verified-domain@example.com>
```

`CONTACT_FROM_EMAIL` must use a sender/domain verified in Resend. Until these values are added, the form returns a safe configuration error and visitors can still use the direct email link.

## Deploy to Vercel

Import this repository in Vercel and set **Root Directory** to `next-portfolio`. Add the three Resend environment variables for Production, Preview, and Development as needed. The temporary metadata URL lives in `app/layout.tsx`; replace `https://sarfraz-portfolio.vercel.app` with the final domain after it is chosen.

## Refresh project screenshots

Run `npm run capture:projects` to capture the five live project homepages at a consistent desktop viewport. The script saves the PNGs to `public/projects/`; these are the images used by the homepage and `/projects` cards.

## Accessibility and motion

Keyboard focus styles are provided throughout. Framer Motion reveals and Lenis both disable when the visitor requests reduced motion. Lenis uses a short `0.65` duration, a quick ease-out curve, and a slightly increased wheel multiplier to avoid the delayed, heavy scroll feel of the original site.
