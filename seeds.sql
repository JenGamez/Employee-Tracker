-- INSERT DATA FOR TABLES

USE employee_tracker;

-- DEPARTMENT DATA
INSERT INTO department (name)
VALUES ("Sales"), ("Engineering"), ("Finance"), ("Legal");

-- EMPLOYEE ROLE DATA
INSERT INTO employee_role (title) 
VALUES ("Sales Lead"), ("Salesperson"), ("Lead Engineer"), ("Software Engineer"), ("Account Manager"), ("Accountant"), ("Legal Team Lead");

INSERT INTO employee_role (salary)
VALUES (100,000), (80,000), (150,000), (120,000), (125,000), (250,000), (190,000);

-- THIS SHOULD BE A FOREIGN KEY, I THINK, BUT HOW TO DO THIS?
INSERT INTO employee_role (department_id)
VALUES ()

-- EMPLOYEE DATA
INSERT INTO employee (first name)
VALUES ("John"), ("Mike"), ("Ashley"), ("Kevin"), ("Malia"), ("Sarah"), ("Tom"), ("Christian");

INSERT INTO employee (last name)
VALUES ("Doe"), ("Chan"), ("Rodriguez"), ("Tupik"), ("Brown"), ("Lourd"), ("Alen"), ("Eckenrode");

-- THIS SHOULD BE A FOREIGN KEY, I THINK, BUT HOW TO DO THIS?
INSERT INTO employee (role_id)
VALUES ()

-- THIS SHOULD BE A FOREIGN KEY, I THINK, BUT HOW TO DO THIS?
INSERT INTO employee (manager_id)
VALUES ()



