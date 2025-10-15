// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  /* Esto controla el error de las rutas terminadas en / de cloudflare */
  trailingSlash: "always",
  vite: {
    plugins: [tailwindcss()],
  },
});
