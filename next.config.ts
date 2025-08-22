/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // don't fail the Vercel build on ESLint errors
  },
};
export default nextConfig;
