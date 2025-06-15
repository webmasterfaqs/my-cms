export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: env('DATABASE_URL'),         // ← Heroku keeps this fresh
    pool: { min: 2, max: 10 },
    // use SSL only if PGSSLMODE=require is set
    ssl: env('PGSSLMODE') === 'require' && { rejectUnauthorized: false },
  },
});

