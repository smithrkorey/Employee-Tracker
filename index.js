const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');


const connection = mysql.createConnection({
    host: 'localhost',
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: 'P@ssword!',
    database: '',
  });

  connection.connect((err) => {
    if (err) throw err;
    runSearch();
  });