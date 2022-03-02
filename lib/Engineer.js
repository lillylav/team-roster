const inquirer = require('inquirer');
const Employee = require('./Employee');


class Engineer extends Employee {
    constructor(name = '', github = '') {
        super(name);

        this.github = github;
    }

    getGithub() {
        return inquirer.prompt([
            {
                type: 'text',
                name: 'github',
                message: "What's the team member's github username? (Required)",
                validate: officeInput => {
                    if (officeInput) {
                        return true;
                    } else {
                        console.log("Please enter the team member's github username!");
                        return false;
                    }
                }
            }
        ]).then(({ github }) => {
            this.engineer = new Engineer(github);
        });
    };

    getRole() {
        return new Engineer;
    };

};

module.exports = Engineer;