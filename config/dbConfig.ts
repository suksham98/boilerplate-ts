require('dotenv').config();

/**
 * Server Configuration
 */
export const serverConfig = {
  mongodb: {
    url: process.env.MONGOURI!,
    database: 'tespo',
  },
  host: 'localhost',
  type: 'http://',
  port: process.env.PORT,
};


