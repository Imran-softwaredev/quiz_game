import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import * as path from "path";

export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@context": path.resolve(__dirname, "src/context"),
      "@icons": path.resolve(__dirname, "src/icons"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@api": path.resolve(__dirname, "src/api"),
      "@reducers": path.resolve(__dirname, "src/reducers"),
      "@providers": path.resolve(__dirname, "src/providers"),
      "@routing": path.resolve(__dirname, "src/routing"),
      "@services": path.resolve(__dirname, "src/services"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
    },
  },
  build: {
    chunkSizeWarningLimit: 3000,
    commonjsOptions: {
      strictRequires: ["node_modules/aws-sdk/**/*.js"],
    },
  },
  server: {
    port: 8000,
  },
});
