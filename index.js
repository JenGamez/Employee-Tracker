var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
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
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Roles",
                "Add Employee",
                "Add Department",
                "Add Role",
                "Update Employee Role",
                "Remove Department",
                "Remove Roles",
                "Remove Employees"
            ]
        })
        .then(function (answer) {
            // based on user answer, switch statements below
            switch (answer.action) {
                case "View All Employees":
                    viewEmployees();
                    break;

                case "View All Employees By Department":
                    viewEmployessByDepartment();
                    break;

                case "View All Roles":
                    viewRoles();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Add Department":
                    addDepartment();
                    break;

                case "Add Role":
                    addRole();
                    break;

                case "Update Employee Role":
                    updateEmployeeRole();
                    break;

                case "Remove Department":
                    removeDepartment();
                    break;

                case "Remove Roles":
                    removeRoles();
                    break;

                case "Remove Employees":
                    removeEmployees();
                    break;

            }
        });
}

// Functions for all the choices


