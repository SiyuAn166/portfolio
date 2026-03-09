/**
 * Data source URL configuration.
 *
 * Automatically switches between local dev data and production Gist based on build environment:
 *   - Development: /data.json from public/ folder (.env)
 *   - Production: GitHub Gist URL (.env.production)
 *
 * To update the production Gist URL:
 *   1. Edit .env.production file
 *   2. Run: npm run build
 *   3. Deploy to GitHub Pages
 *
 * The data is fetched on every page load, so Gist changes are reflected immediately.
 */
export const GIST_URL = import.meta.env.VITE_GIST_URL || '/data.json';
