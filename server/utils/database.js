const { Pool } = require("pg");
require("dotenv").config();

const db = new Pool({
  user: process.env.DATABASE_USER,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
});

module.exports = { db };
