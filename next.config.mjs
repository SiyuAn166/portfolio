/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === 'production' ? "/portfolio" : "";

const nextConfig = {
    reactStrictMode: true,
    output: "export", // generate static resources into out folder in the base directory,
    basePath: basePath
};

// Put a .nojekyll into public folder and then build.
// This enables static resources for deployment on Github Pages.

export default nextConfig;
