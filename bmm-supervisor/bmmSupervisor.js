const mysql = require("mysql");
const inquirer = require("inquirer");
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
});

connection.connect(function (err) {
  if (err) {
    console.error("There is an error connecting: " + err.stack);
    return;
  }

  console.log("Connected as ID: " + connection.threadId);
});




