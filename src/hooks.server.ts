// src/hooks.server.ts
import { sitemapHook } from "sveltekit-sitemap";
import { sitemap } from "./sitemap";
import serviciosJson from "./data/servicios.json";
import type { ServiciosJSON } from './types';

type RouteDefinition = {
    [key: string]: any; // Aquí puedes reemplazar `any` con un tipo más específico si es necesario
  };
const servicios: ServiciosJSON = serviciosJson as ServiciosJSON;
const now = "2023-11-18T15:30:41.733Z"



export const handle = sitemapHook(sitemap, {
    getRoutes: async () => {
        // Generar rutas individuales para cada patente
        const patenteRoutes = Object.keys(servicios.nacional.patentes).map(key => {
          return {
              path: `/patentes/${key}`,
              changeFreq: "Monthly",
              priority: "0.8",
              lastMod: now
              // Aquí puedes agregar otras propiedades como lastMod, priority, etc.
          };
        });
        const modelosRoutes = Object.keys(servicios.nacional.modelos_utilidad).map(key => {
            return {
                path: `/modelos-de-utilidad/${key}`,
                changeFreq: "Monthly",
                priority: "0.8",
                lastMod: now,
                // Aquí puedes agregar otras propiedades como lastMod, priority, etc.
            };
          });

          const disenosRoutes = Object.keys(servicios.mundial.disenos).map(key => {
            return {
                path: `/disenos/${key}`,
                changeFreq: "Monthly",
                priority: "0.8",
                lastMod: now
                // Aquí puedes agregar otras propiedades como lastMod, priority, etc.
            };
          });

        // Crear un objeto de definiciones de ruta
        let routeDefinitions: RouteDefinition = {};

        // Asignar rutas dinámicas
        routeDefinitions["/patentes/[slug]"] = patenteRoutes;
        routeDefinitions["/modelos-de-utilidad/[slug]"] = modelosRoutes;
        routeDefinitions["/disenos/[slug]"] = disenosRoutes;

        return routeDefinitions;
    }
});
