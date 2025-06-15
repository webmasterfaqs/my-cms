export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DB_HOST', 'db.qjmbvkkcdaafledwalzv.supabase.co'),
      port: env.int('DB_PORT', 5432),
      database: env('DB_NAME', 'postgres'),
      user: env('DB_USER', 'postgres'),
      password: env('DB_PASSWORD'),
      ssl: { rejectUnauthorized: false },
      family: 4,                  // ← forces IPv4 at socket level
    },
    pool: { min: 2, max: 10 },
  },
});
