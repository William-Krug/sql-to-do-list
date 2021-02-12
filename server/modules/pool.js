const pg = require('pg');

const config = {
  database: 'weekend-to-do-app',
  host: 'localhost',
  port: 5432,
};

const pool = new pg.Pool(config);

pool.on('connect', () => {
  console.log('*** Connected to Postgres ***');
});

pool.on('error', (error) => {
  console.log('*** ERROR: Failure to connect to Postgres ***', error);
});

module.exports = pool;
