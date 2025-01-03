import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        fementor: resolve(__dirname, 'fementor/index.html'),
        login: resolve(__dirname, 'login/index.html'),
      },
    },
  },
});
