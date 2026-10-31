# Yousef Shehab Portfolio

Responsive Next.js 16.4.3 portfolio built with TypeScript, App Router, Tailwind CSS 4, and ESLint. The target directory was empty; no existing application or user files were replaced.

## Run locally

```powershell
npm ci --legacy-peer-deps
npm run dev -- --port 3117
```

For a production preview, use `npm run build`, then `npm run start -- --port 3117`.

## Checks

```powershell
npm run lint
npm run typecheck
npm run build
```

The compatibility flag avoids an npm 11 peer-dependency resolution stall encountered during setup. There is one npm lockfile and no global npm configuration change.

## Source and routes

[Figma source](https://www.figma.com/design/9pgdAPZDb2V6DCc9LmvvXJ/Portofolio-From-Me?node-id=0-1): page `Portfolio`, desktop frame `264:2209` (1920 × 8564), mobile frame `51:2` (430 × 8621). No tablet frame was supplied; intermediate layouts are inferred.

The `/` route contains anchors `#home`, `#about`, `#portfolio`, `#services`, `#projects`, `#plans`, `#tools`, `#faq`, and `#contact`. It is rendered on the server and statically prerendered. The mobile menu, portfolio gallery controls, and modal dialogs use small client components. FAQs use native accessible disclosures. Project and tool cards wrap into responsive grids; the portfolio gallery retains horizontal mouse and touch scrolling, with optional arrow buttons and arrow keys. Only the main page is constrained against sideways scrolling.

The exact exported images and icons are stored in `public/figma`. Syne, DM Sans, and Inter are self-hosted through `next/font`; no temporary Figma asset URLs are used at runtime. Hero hand animations reproduce the source's two-second alternating scale tracks and respect reduced motion.

## Content to finish later

- Contact destinations are configured in `src/lib/portfolio.ts`: email `fabecv10@gmail.com`, WhatsApp `+201026320810`, and the supplied Behance and Facebook profiles. Email and project buttons open an email draft; WhatsApp opens a conversation with a prepared greeting. Messages are sent only by the visitor.
- Project cards retain the phone and browser placeholders supplied by the design. Their dialogs show the supplied project summaries. Case-study URLs were not present in Figma.
- Figma supplied closed FAQ questions without answer states. The expandable answer copy is provisional and avoids promises about pricing, delivery dates, or revision counts.
- Mobile wording and additional tools follow the mobile frame. Following the responsive correction, all six selected projects are available at every width. Very narrow screens and tablet layouts adapt fluidly without clipping text or requiring sideways scrolling.

Visual comparison evidence is kept outside the application at `D:\yosifaisite\portfolio-evidence`. This is a browser screenshot comparison, not calibrated pixel-perfect approval.

## Production deployment

Live site: https://yousef-shehab-portfolio.vercel.app

Vercel project `yousef-shehab-portfolio` belongs to the connected `voicetraces` team. The production deployment was created from the local application files through the Vercel plugin, without a Git push. Project ID: `prj_fULdKml35kRhoe7Tjyvv0dxBjB21`.
