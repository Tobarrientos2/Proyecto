import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { sitemapPlugin } from 'sveltekit-sitemap/dist/plugin.js';

export default defineConfig({
	plugins: [sveltekit(), sitemapPlugin()]
});
