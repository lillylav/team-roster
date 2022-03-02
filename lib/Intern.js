const inquirer = require('inquirer');
const Employee = require('./Employee');


class Intern extends Employee {
    constructor(name = '', school = '') {
        super(name);

        this.school = school;
    }

    getSchool() {
        return inquirer.prompt([
            {
                type: 'text',
                name: 'school',
                message: "What's the team member's school? (Required)",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log("Please enter the team member's school!");
                        return false;
                    }
                }
            }
        ]).then(({ school }) => {
            this.intern = new Intern(school);
        });
    };

    getRole() {
        return new Intern;
    };
};

module.exports = Intern;