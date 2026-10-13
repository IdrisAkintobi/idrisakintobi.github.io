const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function makeOgImage() {
  const publicDir = path.join(__dirname, '..', 'public', 'images');
  const portraitSrc = path.join(publicDir, 'idris-akintobi-toptal-1920x1080-ultra.jpg');

  // Resize portrait to 460x530 for right side of OG card
  const portraitCropped = await sharp(portraitSrc)
    .extract({ left: 600, top: 50, width: 720, height: 830 })
    .resize(460, 530, { fit: 'cover', position: 'center' })
    .toBuffer();

  // Create rounded mask for portrait
  const roundMaskSvg = Buffer.from(`
    <svg width="460" height="530" xmlns="http://www.w3.org/2000/svg">
      <rect width="460" height="530" rx="24" fill="white" />
    </svg>
  `);

  const maskedPortrait = await sharp(portraitCropped)
    .composite([{ input: roundMaskSvg, blend: 'dest-in' }])
    .png()
    .toBuffer();

  // Frame with border for portrait
  const framedPortraitSvg = Buffer.from(`
    <svg width="464" height="534" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="460" height="530" rx="24" fill="none" stroke="#22d3ee" stroke-width="2" stroke-opacity="0.4" />
    </svg>
  `);

  // Left side vector graphic (Typography, badges, pills)
  const leftOverlaySvg = Buffer.from(`
    <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="cyanText" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#67e8f9" />
          <stop offset="100%" stop-color="#38bdf8" />
        </linearGradient>
        <linearGradient id="bgGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#0c1322" />
          <stop offset="50%" stop-color="#08090c" />
          <stop offset="100%" stop-color="#040507" />
        </linearGradient>
        <radialGradient id="cyanGlow" cx="20%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.15" />
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="0" />
        </radialGradient>
      </defs>

      <!-- Background with subtle glow -->
      <rect width="1200" height="630" fill="url(#bgGlow)" />
      <circle cx="250" cy="200" r="350" fill="url(#cyanGlow)" />

      <!-- Outer card subtle border -->
      <rect x="10" y="10" width="1180" height="610" rx="24" fill="none" stroke="rgba(255,255,255,0.08)" stroke-width="1" />

      <!-- Brand pill -->
      <g transform="translate(70, 70)">
        <rect width="280" height="36" rx="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
        <circle cx="20" cy="18" r="4" fill="#34d399" />
        <text x="34" y="23" font-family="monospace" font-size="13" fill="#cbd5e1" font-weight="500">
          Senior Backend / Full-Stack
        </text>
      </g>

      <!-- Name Headline -->
      <text x="70" y="175" font-family="sans-serif" font-size="52" font-weight="800" fill="#ffffff" letter-spacing="-1.5">
        Idris Akintobi
      </text>

      <!-- Specialization Title -->
      <text x="70" y="230" font-family="sans-serif" font-size="26" font-weight="600" fill="url(#cyanText)" letter-spacing="-0.5">
        Distributed Systems • Scalable Billing • AI Agents
      </text>

      <!-- Description Subtext -->
      <text x="70" y="285" font-family="sans-serif" font-size="17" font-weight="400" fill="#94a3b8">
        6+ years architecting high-throughput backends, 30M+ doc migrations,
      </text>
      <text x="70" y="315" font-family="sans-serif" font-size="17" font-weight="400" fill="#94a3b8">
        and multi-region payment &amp; billing infrastructure (+25% revenue).
      </text>

      <!-- Stack Pills -->
      <g transform="translate(70, 365)">
        <rect x="0" y="0" width="55" height="30" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <text x="16" y="20" font-family="monospace" font-size="13" fill="#cbd5e1">Go</text>

        <rect x="65" y="0" width="75" height="30" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <text x="78" y="20" font-family="monospace" font-size="13" fill="#cbd5e1">Python</text>

        <rect x="150" y="0" width="85" height="30" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <text x="162" y="20" font-family="monospace" font-size="13" fill="#cbd5e1">Node.js</text>

        <rect x="245" y="0" width="75" height="30" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <text x="257" y="20" font-family="monospace" font-size="13" fill="#cbd5e1">NestJS</text>

        <rect x="330" y="0" width="105" height="30" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <text x="342" y="20" font-family="monospace" font-size="13" fill="#cbd5e1">Kubernetes</text>

        <rect x="445" y="0" width="105" height="30" rx="8" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.1)" stroke-width="1" />
        <text x="456" y="20" font-family="monospace" font-size="13" fill="#cbd5e1">Agentic AI</text>
      </g>

      <!-- URL Badge / Footer Pill -->
      <g transform="translate(70, 480)">
        <rect width="230" height="38" rx="10" fill="rgba(34,211,238,0.08)" stroke="rgba(34,211,238,0.25)" stroke-width="1" />
        <circle cx="20" cy="19" r="4" fill="#22d3ee" />
        <text x="36" y="24" font-family="monospace" font-size="15" fill="#22d3ee" font-weight="700">
          idris.akintobi.ng
        </text>
      </g>
    </svg>
  `);

  // Composite the base card with the masked portrait
  const ogCard = await sharp(leftOverlaySvg)
    .composite([
      {
        input: maskedPortrait,
        top: 50,
        left: 670
      },
      {
        input: framedPortraitSvg,
        top: 48,
        left: 668
      }
    ])
    .jpeg({ quality: 95, mozjpeg: true })
    .toBuffer();

  const outPath = path.join(publicDir, 'og-image.jpg');
  fs.writeFileSync(outPath, ogCard);
  console.log('OpenGraph social card generated at', outPath, '(1200x630)');
}

makeOgImage().catch(console.error);
