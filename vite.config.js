import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path'; // Asegúrate de importar path aquí

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
