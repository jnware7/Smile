const pgp = require('pg-promise')();

const config = {
  // database: "smileapp",
  // host: "localhost",
  // port: "5432",
  database: process.env.DATABASE,
  host: process.env.HOST,
  port:process.env.PORT,
};

// console.log("config: ", config)


const db = pgp(config);

// db.query("select * from users").then(result => console.log("test db call: ", result))

module.exports = db;
