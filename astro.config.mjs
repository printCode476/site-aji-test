import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://printcode476.github.io/',
  base: '/site-aji-test',
	integrations: [mdx(), sitemap()],
});
