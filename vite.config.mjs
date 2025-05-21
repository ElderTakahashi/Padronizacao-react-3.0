import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig, normalizePath } from "vite"
const standardFontsDir = normalizePath(
  path.join("node_modules/pdfjs-dist", "standard_fonts"),
)
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [tailwindcss(), react()], // REMOVA tailwindcss daqui

  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
