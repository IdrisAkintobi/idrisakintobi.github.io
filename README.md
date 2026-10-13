# Idris Akintobi — Portfolio

Minimalist, high-craft developer portfolio built for **Idris Akintobi** (Senior Backend / Full-Stack Engineer).
Designed with inspirations from **21st.dev**, **Appwrite.io** (deep graphite dark theme, ambient glow), and **Delta.dev** (calm, high-precision engineering aesthetic).

---

## ⚡ Key Highlights & Features

- **The Lightning Border Tracer (`LightningCard.tsx`):**
  - Continuous animated neon electric beam (`#00F5FF` cyan to `#38BDF8` sky blue with a white-hot core) circulating smoothly around the hero portrait.
  - Accelerates subtly on hover with an ambient backlight glow.
  - Automatically respects `prefers-reduced-motion`.
- **Top 3% Vetted Talent (Toptal):**
  - Integrated official Toptal emblem with custom polygon clip-path and direct profile link.
- **Credly Verified Cloud & Kubernetes Badges:**
  - Google Associate Cloud Engineer
  - AWS Certified Developer — Associate
  - Kubernetes and Cloud Native Associate (KCNA)
- **Specialized Engineering Bento Grid (`BentoGrid.tsx`):**
  - Go, Fastify, NestJS, Deno, Python, Node.js/TypeScript
  - Carrier Billing & Payment Gateways (MTN, Safaricom, Amazon Prime Video MEC/MMC XML, Stripe, Paystack)
  - Zero-downtime database migrations (30M+ docs) & banking compliance storage (MinIO, AES-CBC)
  - Agentic AI pipelines & MCP (Model Context Protocol) tool integrations
- **1-Click Email Clipboard Utility:**
  - Fast copy for `idris@akintobi.ng` with instant toast notification.
- **Live Local Time:**
  - Real-time clock for Lagos, Nigeria (`WAT / UTC+1`).
- **Static Export Ready:**
  - Compiles into pure static HTML/CSS/JS (`output: 'export'`) for free, sub-second hosting on Vercel, Cloudflare Pages, or GitHub Pages.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production / Static Export
```bash
npm run build
```
The optimized static build will be generated in the `out/` directory.

---

## 🌐 One-Click Deployment Options

### Vercel
1. Push your repository to GitHub.
2. Import the repository into [Vercel](https://vercel.com).
3. Framework preset will automatically detect Next.js. Click **Deploy**.

### Cloudflare Pages
1. In Cloudflare Dashboard, navigate to **Pages** > **Create a project**.
2. Connect your GitHub repository.
3. Build command: `npm run build`
4. Build output directory: `out`

### GitHub Pages
1. Run `npm run build`.
2. Push the contents of the `out` directory to your `gh-pages` branch, or use GitHub Actions.

---

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (Custom Dark Slate Palette)
- **Motion:** Framer Motion (`motion`)
- **Icons:** Lucide React & Handcrafted SVGs
- **Language:** TypeScript
