# N-Care Physical Therapy — website

React + Vite + TypeScript + Tailwind CSS v4.

## Setup
npm install
npm run dev

## Structure
- src/data/content.ts    — all copy in one place, edit here first
- src/components/         — Hero, Services, Founder, Locations, Reviews, FinalCta, Nav, Footer
- src/components/MotionLine.tsx — the signature scroll-drawn line motif from the logo
- public/videos/          — drop the AI-generated hero video here as hero-massage.mp4
- public/hero-poster.jpg  — static fallback frame for the hero video (add this)

## To finish before launch
1. Add hero-massage.mp4 (AI-generated macro massage clip) to public/videos/
2. Add hero-poster.jpg (first frame / fallback image) to public/
3. Add a real portrait photo of Tomas in Founder.tsx (currently a placeholder slot)
4. Swap tel: links / addresses in src/data/content.ts if anything changes
5. Compress the hero video (target under ~8MB) before deploying

## Brand tokens
Defined in src/index.css under @theme — colors, fonts (Fraunces + Inter).
Change tokens there and they propagate across every component.
