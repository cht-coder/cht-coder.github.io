// @ts-check
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), mdx()],

  site: 'https://cht-coder.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
  server: { port: 5173 },
});
