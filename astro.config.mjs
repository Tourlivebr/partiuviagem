// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), sitemap()],
  site: 'https://partiuviagem.com.br', // URL de produção (ajuste conforme necessário)
});
