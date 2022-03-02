class Team {
    constructor(name = '', employeeId = '', email = '@') {
        this.name = name;
        this.employeeId = employeeId;
        this.email = email;
    }

    teamMemberInput() {
        inquirer.prompt({
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
        },
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
        },
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
        });
    };

    
};

module.exports = Team;