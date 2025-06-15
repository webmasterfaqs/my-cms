export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),     // Heroku injects this
      ssl: { rejectUnauthorized: false },        // skip CA verification
    },
    pool: { min: 2, max: 10 },
  },
});
