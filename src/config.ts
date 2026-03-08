/**
 * URL of the GitHub Gist raw file that contains your portfolio data.
 *
 * How to update:
 *   1. Create a Gist at https://gist.github.com with a file named `data.json`
 *   2. Open the raw file (click "Raw" on the Gist page)
 *   3. Copy the URL — it looks like:
 *      https://gist.githubusercontent.com/<user>/<gist-id>/raw/<file-hash>/data.json
 *   4. Paste it here and save.
 *
 * The app fetches this URL on every page load.
 * No rebuild needed — just update your Gist content.
 *
 * NOTE: For local development you can also place a `data.json` file in the
 * `public/` folder and point this to `/data.json`.
 */
// export const GIST_URL = '/data.json';
export const GIST_URL = 'https://gist.githubusercontent.com/SiyuAn166/5fa69f351f32a74cbe65c388278ac597/raw/a7df80c17f0c6534c72cb462a1a4bdfa0d9dfcf1/data.json';
