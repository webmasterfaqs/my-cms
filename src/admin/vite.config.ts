import { defineConfig } from 'vite';
import strapiAdmin from '@strapi/admin-vite';

export default defineConfig({
  plugins: [strapiAdmin()],
  server: {
    host: true,                                   // bind to 0.0.0.0 on Heroku
    port: parseInt(process.env.PORT || '1337', 10),
    // allow your slug (or any *.herokuapp.com sub-domain)
    allowedHosts: ['minimi-b031d5829d1e.herokuapp.com'],
    // or: allowedHosts: ['.herokuapp.com'],
  },
});
