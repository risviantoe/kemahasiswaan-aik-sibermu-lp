import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import vercel from "@astrojs/vercel";

export default defineConfig({
  output: "static",
  devToolbar: { enabled: false },
  vite: { plugins: [tailwindcss()] },
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
