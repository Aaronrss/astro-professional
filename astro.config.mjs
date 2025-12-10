// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';

export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/',
  output: 'static',
  integrations: [mdx(), icon()],
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: '0.0.0.0',
      port: 5000,
      allowedHosts: true
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
