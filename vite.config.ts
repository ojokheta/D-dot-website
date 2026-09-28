import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const root = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(root, "index.html"),
        about: resolve(root, "about.html"),
        catering: resolve(root, "catering.html"),
        menu: resolve(root, "menu.html"),
        eatery: resolve(root, "eatery.html"),
        contact: resolve(root, "contact.html"),
      },
    },
  },
});
