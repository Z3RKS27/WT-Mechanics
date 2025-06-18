/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'localhost',
      ...(process.env.NEXT_PUBLIC_BACKEND_URL 
        ? [new URL(process.env.NEXT_PUBLIC_BACKEND_URL).hostname] 
        : [])
    ].filter(Boolean),
  },
  allowedDevOrigins: [
    "http://192.168.0.3:3000",  // Aquí la IP de tu máquina local
  ],
};

module.exports = nextConfig;
