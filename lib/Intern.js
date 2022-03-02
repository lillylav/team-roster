const Team = require('./Team');


class Intern extends Team {
    constructor(name = '', school = '') {
        super(name);

        this.school = school;
    }

        // get manager information
    internInput() {
        Team.teamMemberInput();

        inquirer
            .prompt({
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
        });
    };
};

module.exports = Intern;