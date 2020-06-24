const { Pool } = require("pg");
require("dot-env");

const pool = new Pool({
  user: DB_USER,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_DATABASE,
});

module.exports = pool;
