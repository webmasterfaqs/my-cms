import { StrapiConfig } from '@strapi/types';

const config: StrapiConfig['server'] = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),           // 0.0.0.0 for Heroku
  port: env.int('PORT', 1337),            // use dyno port
  app: { keys: env.array('APP_KEYS') },   // mandatory in prod
});

export default config;

