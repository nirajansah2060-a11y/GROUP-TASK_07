const mysql = require("mysql2/promise");

const {
  DB_HOST = "db",
  DB_USER = "campus_user",
  DB_PASSWORD = "campus_password",
  DB_NAME = "campuscycle",
  DB_PORT = 3306
} = process.env;

const pool = mysql.createPool({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
  port: Number(DB_PORT),
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;
