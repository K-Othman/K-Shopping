import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "^/api": {
        target: "https://k-shopping.vercel.app/", // Replace with your server URL
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
