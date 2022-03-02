const inquirer = require('inquirer');
const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name = '', officeNumber = '') {
        super(name);

        this.officeNumber = officeNumber;
    }

    // get manager information
    getOfficeNumber() {
        return inquirer.prompt([
            {
                type: 'text',
                name: 'officeNumber',
                message: "What's the team manager's office number? (Required)",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log("Please enter the team manager's office number!");
                        return false;
                    }
                }
            }
        ]).then(({ officeNumber }) => {
            this.manager = new Manager(officeNumber);
        });
    };

    getRole() {
        return new Manager;
    };

};

module.exports = Manager;