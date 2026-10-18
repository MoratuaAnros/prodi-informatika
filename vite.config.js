// vite.config.js
// File konfigurasi Vite (alat yang menjalankan & mem-build proyek React kita).
// Plugin react() membuat Vite paham sintaks JSX.
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
 