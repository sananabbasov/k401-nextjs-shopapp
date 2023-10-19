/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    env: {
        baseUrl: 'https://localhost:7037/api',
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
            },
        ],
    },
}
