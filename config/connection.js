// Set up MySQL connection.
var mysql = require("mysql");
require("dotenv").config();

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db"
});

if(process.env.NODE_ENV === "production"){
  connection = mysql.createConnection(
    // host: process.env.JAWSHOST,
    // user: process.env.JAWSUSER,
    // port: process.env.JAWSPORT,
    // password: process.env.JAWSPWD,
    // database: process.env.JAWSDB
    process.env.JAWSDB_URL
  );

}


// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;