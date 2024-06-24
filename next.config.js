/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: 'default',
        path: '/',
    },
}

module.exports = nextConfig
