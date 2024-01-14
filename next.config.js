/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images:{
        remotePatterns: [
        {
            hostname: "cdn.myanimelist.net"
        },
        {
            hostname: "placehold.co"
        },
        {
            hostname: "tailwindui.com"
        },
        {
            hostname: "i.scdn.co"
        }

        ]
    }
}

module.exports = nextConfig
