/**
 * Production database configuration for Heroku + Supabase.
 * Uses DATABASE_URL if present, otherwise falls back to field-by-field vars.
 */
export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL', {
      host: env('DB_HOST'),
      port: env.int('DB_PORT', 5432),
      database: env('DB_NAME'),
      user: env('DB_USER'),
      password: env('DB_PASSWORD'),
      ssl: { rejectUnauthorized: false }, // Supabase requires SSL
    }),
    pool: { min: 2, max: 10 },
  },
});
