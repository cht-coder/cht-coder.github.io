// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [
    react({ babel: { plugins: ['babel-plugin-react-compiler'] } }),
    mdx(),
    sitemap({ namespaces: { image: false, video: false } }),
  ],

  site: 'https://cht-coder.github.io',
  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
  },
  server: { port: 5173 },
});
