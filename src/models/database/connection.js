const pgp = require('pg-promise')();

const config = {
  database: process.env.DATABASE,
  host: process.env.HOST,
  port:process.env.PORT,
};

const db = pgp(config);

module.exports = db
