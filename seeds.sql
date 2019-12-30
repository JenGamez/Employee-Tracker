-- INSERT DATA FOR TABLES

USE employee_tracker;

-- DEPARTMENT DATA 

-- - WORKED!
INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");
-- ________________________________________________________________________________________

-- EMPLOYEE ROLE DATA 



INSERT INTO employee_role (title, salary, department_id) VALUES ("Sales Lead", 100.000, 1), ("Salesperson", 80.000, 1), ("Lead Engineer", 150.000, 2), ("Software Engineer", 120.000, 2), ("Account Manager", 125.000, 3), ("Accountant", 250.000, 3), ("Legal Team Lead", 190.000, 4);



________________________________________________________________________________________

-- EMPLOYEE DATA

-- WORKED!
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe"), ("Mike", "Chan"), ("Ashley", "Rodriguez"), ("Kevin", "Tupik"), ("Malia", "Brown"), ("Sarah", "Lourd"), ("Tom", "Alen"), ("Christian", "Eckenrode");

-- WORKED!  I DIDN'T GET AN ERROR, BUT THE VALUES AREN'T SHOWING UP IN TABLE
INSERT INTO employee (last_name)
VALUES ( ("), (""), (""), (""), ("Lourd"), ("Alen"), ("Eckenrode");

-- THIS IS A FOREIGN KEY, SO WHY DOES'T IT AUTO FILL WITH ROLE ID?  
INSERT INTO employee (role_id)
VALUES ();

-- THIS IS A FOREIGN KEY, SO WHY DOES'T IT AUTO FILL WITH MANAGER ID??  
INSERT INTO employee (manager_id)
VALUES ();



