// Set up MySQL connection.
const mysql = require("mysql");
const connection;

if (process.env.JAWSDB_URL) {
const connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Ellie20",
  database: "burger_db",
});
}

connection.connect()
module.exports = connection;
