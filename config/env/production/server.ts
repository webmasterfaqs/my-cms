/**
 * Production server configuration for Heroku.
 * Binds Strapi to the dyno’s PORT and supplies cookie-signing keys.
 */
export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'), // required by Heroku routing
  port: env.int('PORT', 1337),  // Heroku supplies PORT env var
  app: {
    keys: env.array('APP_KEYS'), // mandatory in production
  },
});


