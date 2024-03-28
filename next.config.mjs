/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export", // generate static resources into out folder in the base directory
    basePath: '/github-pages', // config for static resources including images, css and js in built app.
};

export default nextConfig;
