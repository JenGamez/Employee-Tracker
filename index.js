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
            console.log(answer.action)
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
// VIEWS will be .get (read) SELECT
// ADD will be .post (create) INSERT
// UPDATE will be .put (update)
// REMOVE will be .delete(delete)

function viewEmployees() {
    connection.query("SELECT * FROM employee", function (err, res) {
        console.log(res)
        // if (err) throw err;
        for (var i = 0; i < res.length; i++) {

            if (res[i]) {
                console.log("as a string")
                console.log(res[i].id + "\t" + res[i].first_name + "\t" + res[i].last_name + "\t" + res[i].role_id);
            }

        }
        start()
    })

}

function viewEmployessByDepartment() {
    connection.query("SELECT * FROM department", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            if (res[i]) {
                console.log(res[i].id + "\t" + res[i].name);
            }

        }
        start()
    })
}

function viewRoles() {
    connection.query("SELECT * FROM employee_role", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            if (res[i]) {
                console.log(res[i].id + "\t" + res[i].title + "\t" + res[i].salary + "\t" + res[i].department_id);
            }

        }
        start()
    })
}

function addEmployee() {
    // prompt for info about the employee
    inquirer
      .prompt([
        {
          name: "first_name",
          type: "input",
          message: "Enter first name of employee"
        },
        {
          name: "last_name",
          type: "input",
          message: "Enter last name of employee?"
        }
        // NEED TO FIGURE OUT HOW TO ADD THE ROLE ID AND MANAGER ID
      ])
      .then(function(answer) {
        // when finished prompting, insert new employee info into table
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.first_name,
            last_name: answer.last_name
          },
          function(err) {
            if (err) throw err;
            console.log("Your new employee has been entered");
            
            start();
          }
        );
      });
  }
  
//   NOT WORKING WHEN ENTER NEW DEPARTMENT.  GET THIS ERROR:  Unknown column 'department' in 'field list'
  function addDepartment() {
    // prompt for info about the new department
    inquirer
      .prompt([
        {
          name: "department",
          type: "input",
          message: "Enter new department name"
        }
        // NEED TO FIGURE OUT HOW TO ADD ID
      ])
      .then(function(answer) {
        // when finished prompting, insert new depsrtment info into table
        connection.query(
          "INSERT INTO department SET ?",
          {
            department: answer.department,
    
          },
          function(err) {
            if (err) throw err;
            console.log("Your new department has been entered");
            
            start();
          }
        );
      });
  }

//   NOT WORKING WHEN ENTER NEW DEPARTMENT.  GET THIS ERROR:  Unknown column 'department' in 'field list'
  function addRole() {
    // prompt for info about the new role
    inquirer
      .prompt([
        {
          name: "role",
          type: "input",
          message: "Enter new employee role"
        }
        // NEED TO FIGURE OUT HOW TO ADD ID
      ])
      .then(function(answer) {
        // when finished prompting, insert new role info into table
        connection.query(
          "INSERT INTO employee_role SET ?",
          {
            role: answer.role,
    
          },
          function(err) {
            if (err) throw err;
            console.log("Your new employee role has been entered");
            
            start();
          }
        );
      });
  }

//   NEED TO TO UPDATE EMPLOYEE ROLE HERE


// PROMPT IS WORKING, BUT WHEN TRY TO DELETE, THEN GET THIS ERROR: Unknown column 'role' in 'field list'
function removeDepartment() {
    // prompt for info about the employee
    inquirer
      .prompt([
        {
          name: "remove_department",
          type: "input",
          message: "Enter the name of the department you want to delete"
        }
      ])
      .then(function(answer) {
        // when finished prompting, delete department from table
        connection.query(
          "DELETE FROM department WHERE name = ?",
          {
            remove_deprtment: answer.remove_deprtment,
          },
          function(err) {
            if (err) throw err;
            console.log("A department has been removed");
            
            start();
          }
        );
      });
  }

  function removeRoles() {
    // prompt for info about the employee
    inquirer
      .prompt([
        {
          name: "remove_roles",
          type: "input",
          message: "Enter the name of the role you want to delete"
        }
      ])
      .then(function(answer) {
        // when finished prompting, delete department from table
        connection.query(
          "DELETE FROM employee_role WHERE ??",
          {
            remove_roles: answer.remove_roles,
          },
          function(err) {
            if (err) throw err;
            console.log("A department has been removed");
            
            start();
          }
        );
      });
  }

  function removeEmployees() {
    // prompt for info about the employee
    inquirer
      .prompt([
        {
          name: "remove_employees",
          type: "input",
          message: "Enter the name of the employee you want to delete"
        }
      ])
      .then(function(answer) {
        // when finished prompting, delete department from table
        connection.query(
          "DELETE FROM employee WHERE ??",
          {
            remove_employees: answer.remove_employees,
          },
          function(err) {
            if (err) throw err;
            console.log("An employee has been removed");
            
            start();
          }
        );
      });
  }


