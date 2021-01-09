const mysql = require('mysql');
const inquirer = require('inquirer');
const { table } = require('console');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bobmarleymart',
});

connection.connect(function (err) {
  if (err) {
    console.error(`There is an error connecting: ${err.stack}`);
    return;
  }

  console.log(`Connected as ID: ${connection.threadId}`);

  loadProducts();
});

function loadProducts() {
  // select all products from SQL table
  connection.query('SELECT * FROM products', function (err, res) {
    if (err) throw err;

    console.table(res);
  });
}

inquirer
  .prompt([
    {
      name: 'strainToBuy',
      message: 'What is the ID of the strain you want to buy? [Quit with Q]',
    } /* Pass your questions in here */,
  ])
  .then((answers) => {
    console.log('Answer:', answers.strainToBuy);
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });

function checkIfIShouldExit(choice) {
  if (choice.toLowerCase() === 'q') {
    console.log('Goodbye!');
    process.exit(0);
  }
}
