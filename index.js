var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "Nirvana74!",
    database: "employee_tracker"
});

connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    start();
});

function start() {
    inquirer
        .prompt({
            name: "start",
            type: "list",
            message: "Would you like to [POST] an auction or [BID] on an auction?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager"
            ]
        })
        .then(function (answer) {
            // based on their answer, either call the bid or the post functions
            if (answer.postOrBid === "POST") {
                postAuction();
            }
            else if (answer.postOrBid === "BID") {
                bidAuction();
            } else {
                connection.end();
            }
        });
}

