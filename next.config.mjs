import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Vos configurations existantes */
  images: {
    unoptimized: true, // Important pour Cloudflare Pages
    // Ou utilisez un domaine distant pour l'optimisation
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: '*.pages.dev',
    //   },
    // ],
  },
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;