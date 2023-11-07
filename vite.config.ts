import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  test: {
    environments: "jsdom",
  },
  resolve: {
    alias: {
      "@components": "/src/components",
      "@schemas": "/src/schemas",
      "@assets": "/src/assets",
      "@utils": "/src/utils",
      "@data": "/src/data",
      "@stores": "/src/stores",
    },
  },
});
