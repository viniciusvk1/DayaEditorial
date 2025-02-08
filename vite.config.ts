import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets', // Origem
          dest: '' // Copia para a raiz de dist
        }
      ]
    })
  ],
  server: {
    host: true,
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  base: '/', // Garante que os assets são servidos corretamente no CPanel
});
