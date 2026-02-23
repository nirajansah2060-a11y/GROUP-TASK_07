const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: process.env.DB_HOST || "db",
  user: process.env.DB_USER || "campus_user",
  password: process.env.DB_PASSWORD || "campus_password",
  database: process.env.DB_NAME || "campuscycle",
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10
});

module.exports = pool;
