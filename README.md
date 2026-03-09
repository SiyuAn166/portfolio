# Terminal Portfolio

A CRT-terminal-aesthetic personal portfolio built with **React + TypeScript + Tailwind CSS v3** (Vite).

All content is data-driven — update a JSON file to change every word on the page without touching any component code.

---

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## How Content Works

The app fetches a single JSON file at runtime.  
The source URL is defined in **one place**: [`src/config.ts`](src/config.ts).

```ts
// src/config.ts
export const GIST_URL = '/data.json';   // ← change this
```

**Two options:**

| Option | When to use |
|--------|-------------|
| `public/data.json` (default) | Local dev and self-hosted deployments |
| GitHub Gist raw URL | Update content without rebuilding |

### Using a GitHub Gist

1. Go to [https://gist.github.com](https://gist.github.com) and create a **public** Gist.
2. Name the file exactly **`data.json`**.
3. Paste your JSON (see schema below).
4. Click **Create public gist**.
5. Click the **Raw** button — copy the URL. It looks like:
   ```
   https://gist.githubusercontent.com/YOUR_USER/GIST_ID/raw/FILE_HASH/data.json
   ```
6. Paste it in `src/config.ts`:
   ```ts
   export const GIST_URL = 'https://gist.githubusercontent.com/...';
   ```
7. Rebuild or re-run `npm run dev`.

> **To update your portfolio later:** simply edit the Gist content. The page fetches fresh data on every visit — no rebuild needed.

---

## `data.json` — Full Schema Reference

Below is the complete structure with every field documented.

```jsonc
{
  // ─── meta ────────────────────────────────────────────────────────────────
  "meta": {
    // Header badge shown top-left, e.g. "DEBIAN_VIRTUAL_TERMINAL [TTY1]"
    "systemTag": "string",

    // Uptime text shown top-right, e.g. "142d 06h 12m"
    "uptime": "string",

    // Load average shown top-right, e.g. "0.12 0.08 0.01"
    "load": "string",

    // Lines revealed one-by-one during the animated boot sequence.
    // The LAST line is styled as the "ready" line (green, italic, underlined).
    // Use standard [ OK ] / [ ERR ] / [ WARN ] prefixes for aesthetics.
    "bootMessages": [
      "[ OK ] Initializing Portfolio Kernel v6.0.2...",
      "[ OK ] Mounting /dev/identity as Read-Only...",
      "System ready. Welcome back, Architect."
    ],

    // Copyright line in the footer, e.g. "© 2026 YOUR_NAME // ALL RIGHTS RESERVED"
    "copyright": "string",

    // Location + encryption note in the footer.
    // Use " // " as a separator for the two parts.
    // e.g. "Loc: 49.28° N, 123.12° W // Enc: AES-256-GCM"
    "location": "string"
  },

  // ─── identity ────────────────────────────────────────────────────────────
  "identity": {
    // Large hero heading. Use underscores instead of spaces for the terminal look.
    // e.g. "Principal_Systems_Engineer"
    "title": "string",

    // Paragraph shown below the title. One or two sentences.
    "tagline": "string"
  },

  // ─── experience ──────────────────────────────────────────────────────────
  // Rows in the `ls -la` styled table. Ordered newest → oldest.
  "experience": [
    {
      // Unix permission string (freeform, no validation).
      // drwxr-xr-x = directory/role   -rwxr--r-- = file/contract
      "permissions": "drwxr-xr-x",

      // Owner column — typically "admin" for senior roles, "user" for junior.
      "owner": "admin",

      // File size column — purely decorative, e.g. "2048B", "1024B"
      "size": "2048B",

      // Date column — e.g. "MAR 2024", "JUN 2022"
      "timestamp": "MAR 2024",

      // Entry label shown in the Name column.
      // Use SCREAMING_SNAKE_CASE with a leading slash.
      // e.g. "/LEAD_ARCHITECT_COMPANY_NAME"
      "name": "/LEAD_ARCHITECT_LAB_01",

      // (optional) If true, this row is highlighted in accent color.
      // Mark your current/most-recent role.
      "current": true,

      // (optional) URL to open when clicking the entry name.
      // Only applies when current = true.
      "url": "https://example.com"
    }
    // ... more entries
  ],

  // ─── projects ────────────────────────────────────────────────────────────
  // Each entry renders as an ASCII-art project card with hover effects.
  // The card grid is 1-column on mobile, 2-column on large screens.
  "projects": [
    {
      // Project system name in SCREAMING_SNAKE_CASE.
      // Appears in the ASCII box header.
      "name": "ONYX_PROTOCOL",

      // Semantic version string shown next to the name.
      "version": "v2.1.0",

      // Short status label shown in the ASCII box header (right side).
      // Suggested values: ACTIVE | STABLE | BETA | ARCHIVED | WIP
      "status": "ACTIVE",

      // One-to-two sentence description of what the project does.
      "description": "string",

      // Filled accent-colored badge(s) shown below the description.
      // Use underscores instead of spaces, e.g. ["Rust_Lang", "WebRTC", "P2P"]
      "tags": ["Rust_Lang", "WebRTC"],

      // (optional) License identifier rendered as an italic badge.
      // e.g. "MIT_License", "Apache-2.0", "GPL-3.0"
      "license": "MIT_License",

      // (optional) URL opened when the user clicks the card.
      "url": "https://github.com/you/project"
    }
    // ... up to 4 projects recommended for layout balance
  ],

  // ─── skills ──────────────────────────────────────────────────────────────
  // Each entry renders as an animated progress bar.
  // Bars animate from 0% to `level` on scroll-into-view.
  // Grid is 1-column on mobile, 2-column on sm+.
  "skills": [
    {
      // Display name — use underscores, e.g. "Rust_Core", "Go_Routine"
      "name": "Rust_Core",

      // Proficiency level 0–100 (integer).
      // Rendered as a percentage label and bar width.
      "level": 95
    }
    // ... 6–10 skills recommended
  ]
}
```

---

## Complete Example

A ready-to-use `data.json` with placeholder content is already at [`public/data.json`](public/data.json).

---

## Theming

The portfolio ships in **dark mode** (green accent `#22C55E`) by default.  
The **Toggle_Power** switch in the top-right swaps to **light mode** (blue accent `#1D4ED8`).

All colors are driven by CSS custom properties in [`src/index.css`](src/index.css).  
To change the accent colors, edit the `--accent` variables:

```css
/* src/index.css */
:root[data-theme='dark']  { --accent: #22C55E; }
:root[data-theme='light'] { --accent: #1D4ED8; }
```

---

## Project Structure

```
src/
├── config.ts                  ← GIST_URL lives here
├── types.ts                   ← PortfolioData TypeScript interface
├── index.css                  ← CSS variables, keyframes, theme tokens
├── App.tsx                    ← Root: fetches data, wires layout
├── main.tsx                   ← Entry point, sets initial data-theme
├── hooks/
│   ├── usePortfolioData.ts    ← Fetch + parse Gist JSON
│   ├── useTheme.ts            ← Dark/light toggle, data-theme attribute
│   └── useIntersectionObserver.ts  ← Scroll-reveal utility
└── components/
    ├── ScanlineOverlay.tsx    ← Fixed CRT scanline effect
    ├── AsciiNoise.tsx         ← Fixed canvas ASCII character noise
    ├── ThemeToggle.tsx        ← Top-right power switch button
    ├── CommandLine.tsx        ← Reusable $ command line with typewriter
    ├── RevealSection.tsx      ← IntersectionObserver fade-up wrapper
    ├── HeroSection.tsx        ← whoami section with glitch title
    ├── ExperienceSection.tsx  ← ls -la table of roles
    ├── ProjectCard.tsx        ← Single ASCII-art project card
    ├── ProjectsSection.tsx    ← view_projects grid
    ├── SkillBar.tsx           ← Individual animated progress bar
    ├── CapabilitiesSection.tsx ← stat capabilities grid
    └── Footer.tsx             ← Blinking cursor + copyright
public/
└── data.json                  ← Sample data for local dev
```

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server at [http://localhost:5173](http://localhost:5173) |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |


## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
