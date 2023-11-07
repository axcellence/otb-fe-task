import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true
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
