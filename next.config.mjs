/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    output: "export", // generate static resources into out folder in the base directory,
    images: {
        loader: 'akamai',
        path: '',
    },
    assetPrefix: './portfolio',
};

export default nextConfig;
