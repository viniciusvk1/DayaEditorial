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
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url && !req.url.startsWith('/@') && !req.url.startsWith('/assets') && !req.url.includes('.')) {
          req.url = '/index.html';
        }
        next();
      });
    }
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  base: './',
});
