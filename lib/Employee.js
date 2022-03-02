const inquirer = require('inquirer');

class Employee {
    constructor(name = '', employeeId = '', email = '@') {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
    }

    getName() {
        return inquirer.prompt([
            {
                type: 'text',
                name: 'name',
                message: "What is the team member's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the team member's name!");
                        return false;
                    };
                }
            }
        ]).then(({ name }) => {
            this.employee = new Employee(name);
        });
    };

    getId() {
        return inquirer.prompt([
            {
                type: 'text',
                name: 'employeeId',
                message: "What's the team member's employee ID? (Required)",
                validate: employeeIdInput => {
                    if (employeeIdInput) {
                        return true;
                    } else {
                        console.log("Please enter the team member's employee ID!");
                        return false;
                    };
                }
            }
        ]).then(({ employeeId }) => {
            this.employee = new Employee(employeeId);
        });
    };

    getEmail() {
        return inquirer.prompt([
            {
                type: 'text',
                name: 'email',
                message: "What's the team member's email? (Required)",
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log("Please enter the team member's email!");
                        return false;
                    };
                }
            }
        ]).then(({ email }) => {
            this.employee = new Employee(email);
        });
    };

    getRole() {
        return new Employee;
    };
    
};

module.exports = Employee;