<<<<<<< HEAD
import { defineConfig } from "vite"
import path from "path"
import react from "@vitejs/plugin-react-swc"
import tailwindcss from "@tailwindcss/vite"
=======
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
>>>>>>> 4cdbe3ae2ff38a37f2aba2fa423bde80e66a6fdc

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
