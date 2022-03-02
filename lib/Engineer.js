const Team = require('./Team');


class Engineer extends Team {
    constructor(name = '', github = '') {
        super(name);

        this.github = github;
    }

        // get manager information
    engineerInput() {
        Team.teamMemberInput();

        inquirer
            .prompt({
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
            });
    };
    
};

module.exports = Engineer;