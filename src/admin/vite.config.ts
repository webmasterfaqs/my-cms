// src/admin/vite.config.ts
import { defineConfig } from 'vite';
import strapiAdmin from '@strapi/admin-vite';

export default defineConfig({
  plugins: [strapiAdmin()],
  server: {
    host: true,                                   // listen on 0.0.0.0
    port: parseInt(process.env.PORT || '1337', 10),
    /* Allow any *.herokuapp.com sub-domain.       *
     * (You can hard-code a single slug instead.) */
    allowedHosts: ['.herokuapp.com'],
  },
});
