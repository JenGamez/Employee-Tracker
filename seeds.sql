-- INSERT DATA FOR TABLES

USE employee_tracker;

-- DEPARTMENT DATA 

- WORKED!
INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");
-- ________________________________________________________________________________________

-- EMPLOYEE ROLE DATA 

-- - WORKED!
INSERT INTO employee_role (title) 
VALUES ("Sales Lead"), ("Salesperson"), ("Lead Engineer"), ("Software Engineer"), ("Account Manager"), ("Accountant"), ("Legal Team Lead");

-- NOT WORKING!  ERROR: COLUMN COUNT DOESN'T MATCH VALUE COUNT AT ROW 1
INSERT INTO employee_role (salary)
VALUES (100,000), (80,000), (150,000), (120,000), (125,000), (250,000), (190,000);

-- THIS IS A FOREIGN KEY, SO WHY DOES'T IT AUTO FILL WITH DEPARTMENT ID?  
INSERT INTO employee_role (department_id)
VALUES ();

-- ________________________________________________________________________________________

-- EMPLOYEE DATA

-- WORKED!
INSERT INTO employee (first_name)
VALUES ("John"), ("Mike"), ("Ashley"), ("Kevin"), ("Malia"), ("Sarah"), ("Tom"), ("Christian");

-- WORKED!  I DIDN'T GET AN ERROR, BUT THE VALUES AREN'T SHOWING UP IN TABLE
INSERT INTO employee (last_name)
VALUES ("Doe"), ("Chan"), ("Rodriguez"), ("Tupik"), ("Brown"), ("Lourd"), ("Alen"), ("Eckenrode");

-- THIS IS A FOREIGN KEY, SO WHY DOES'T IT AUTO FILL WITH ROLE ID?  
INSERT INTO employee (role_id)
VALUES ();

-- THIS IS A FOREIGN KEY, SO WHY DOES'T IT AUTO FILL WITH MANAGER ID??  
INSERT INTO employee (manager_id)
VALUES ();

