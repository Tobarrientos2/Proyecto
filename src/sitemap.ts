import type { RO_Sitemap } from 'sveltekit-sitemap';

export const sitemap = (<const>{
   "/": true,
   "/beneficios": false,
   "/disenos/[slug]": false,
   "/disenos": true,
   "/experiencias": true,
   "/experiencias/[slug]": false,
   "/marcas/[slug]": false,
   "/marcas": true,
   "/modelos-de-utilidad/[slug]": false,
   "/modelos-de-utilidad": true,
   "/nuestro-equipo": false,
   "/oficina-en-chile": false
}) satisfies RO_Sitemap

export type Sitemap = typeof sitemap
