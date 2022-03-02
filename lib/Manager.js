const Team = require('./Team');


class Manager extends Team {
    constructor(name = '', officeNumber = '') {
        super(name);

        this.officeNumber = officeNumber;
    }

    // get manager information
    managerInput() {
        Team.teamMemberInput();

        inquirer
            .prompt({
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
            });
    };

    // createManager() {
    //     const manager = new Manager {
    //         name: data.name,
    //         employeeId: data.employeeId,
    //         email: this.email,

    //     };
    // }

    // console.log(Manager);
}

module.exports = Manager;