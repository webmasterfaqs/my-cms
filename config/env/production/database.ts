import { StrapiConfig } from '@strapi/types';

const config: StrapiConfig['database'] = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL', {
      host: env('DB_HOST'),
      port: env.int('DB_PORT', 5432),
      database: env('DB_NAME'),
      user: env('DB_USER'),
      password: env('DB_PASSWORD'),
      ssl: { rejectUnauthorized: false },  // Supabase needs SSL
    }),
    pool: { min: 2, max: 10 },
  },
});

export default config;

