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

inquirer
    .prompt([{
        // type: "input",
        // name: "choice",
        // message: "What is the ID of the item you would like to purchase? [Quit with Q]",
        // validate: function (val) {
        //     return !isNaN(val) || val.toLowerCase() === "q";
        // }
    }   /* Pass your questions in here */
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });