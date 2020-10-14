'use strict';

const corsProxy = require('cors-anywhere');
const checkRateLimit = require('./node_modules/cors-anywhere/lib/rate-limit');

// Listen on a specific host via the HOST environment variable
const host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
const DEFAULT_PORT = 8080;
const port = process.env.PORT || DEFAULT_PORT;
const DAY = 24 * 60 * 60;

corsProxy.createServer({
  // Allow all origins
  checkRateLimit: checkRateLimit('50 3 http://localhost:3000 https://maxwellcohen.github.io'),
  corsMaxAge: DAY,
  originWhitelist: [
    'http://localhost:3000',
    'https://maxwellcohen.github.io/map-dashboard/'
  ]

  /*
   * RequireHeader: ['origin', 'x-requested-with'],
   * RemoveHeaders: ['cookie', 'cookie2']
   */

}).listen(port, host, () => {

  console.log(`Running CORS Anywhere on ${host}:${port}`);

});
