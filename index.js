const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const HTMLPage = require('./src/HTMLPage');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pathToDist = path.resolve(__dirname, 'dist');
const HTMLToDist = path.join(pathToDist, 'index.html');

const employees = [];
const managerArr = [];
const engineersArr = [];
const internsArr = []

// get user input for manager object
promptManager = () => {
    // user instruction
    console.log(`
    -----------------------------------------------
    
        Please enter manager information first.
        
    -----------------------------------------------
    `);

    // user prompts for manager's name, employee ID, email, and office number
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is the team manager's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's name!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'employeeId',
            message: "What's the team manager's employee ID? (Required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's employee ID!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "What's the team manager's email? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter the team manager's email!");
                    return false;
                };
            }
        },
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
    ]).then((manager) => {
        // send prompt info to Manager object
        const managerInfo = new Manager(manager.name, manager.employeeId, manager.email, manager.officeNumber);

        // push to managerArr
        managerArr.push(managerInfo);

        console.log(managerArr);

        // // push to employees array
        // employees.push(managerInfo);

        // prompt new team member
        addNewTeamMember();
    });
};


// get user input for engineer(s) object(s)
promptEngineer = () => {
    // user instruction
    console.log(`
    ------------------------------------------------
    
        Please enter this engineer's information.
        
    ------------------------------------------------
    `);

    // user prompts for engineer's name, employee ID, email, and github
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is this engineer's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter this engineer's name!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'employeeId',
            message: "What's this engineer's employee ID? (Required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter this engineer's employee ID!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "What's this engineer's email? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter this engineer's email!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'github',
            message: "What's this engineer's github username? (Required)",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log("Please enter this engineer's github username!");
                    return false;
                }
            }
        }
    ]).then((engineer) => {
        // send prompt info to Engineer object
        const engineersInfo = new Engineer(engineer.name, engineer.employeeId, engineer.email, engineer.github);
        
        // push to managerArr
        engineersArr.push(engineersInfo);

        console.log(engineersArr);

        // // push to employees array
        // employees.push(engineerInfo);

        // prompt new team member
        addNewTeamMember();
    });
};


// get user input for intern(s) object(s)
promptIntern = () => {
    // user instruction
    console.log(`
    ----------------------------------------------
    
        Please enter this intern's information.
        
    ----------------------------------------------
    `);

    // user prompts for intern's name, employee ID, email, and school
    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "What is this intern's name? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter this intern's name!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'employeeId',
            message: "What's this intern's employee ID? (Required)",
            validate: employeeIdInput => {
                if (employeeIdInput) {
                    return true;
                } else {
                    console.log("Please enter this intern's employee ID!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'email',
            message: "What's this intern's email? (Required)",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter this intern's email!");
                    return false;
                };
            }
        },
        {
            type: 'text',
            name: 'school',
            message: "What's this intern's school? (Required)",
            validate: officeInput => {
                if (officeInput) {
                    return true;
                } else {
                    console.log("Please enter this intern's school!");
                    return false;
                }
            }
        }
    ]).then((intern) => {
        // send prompt info to Intern object
        const internsInfo = new Intern(intern.name, intern.employeeId, intern.email, intern.school);
        
        // push to managerArr
        internsArr.push(internsInfo);

        console.log(internsArr);

        // // push to employees array
        // employees.push(internInfo);

        // prompt new team member
        addNewTeamMember();
    });
};


// get user input for adding an additional team member
addNewTeamMember = function() {
    // user prompt to confirm team member type
    inquirer.prompt([
        {
            type: 'list',
            name: 'eOrI',
            message: "Would you like to add a new Engineer, new Intern, or is your team complete?",
            choices: ['New Engineer', 'New Intern', 'Complete']            
        }
    ]).then(({ eOrI}) => {
            if(eOrI === 'New Engineer') {
                // if engineer is selected, run prompt engineer prompts
                promptEngineer();
            } else if(eOrI === 'New Intern') {
                // if intern is selected, run prompt intern prompts
                promptIntern();
            } else if(eOrI === 'Complete') {
                employees.push(managerArr);
                employees.push(engineersArr);
                employees.push(internsArr);

                console.log(employees);

                generateRoster();
            }
        });
};

// generate HTML page
generateRoster = () => {
    fs.writeFileSync(HTMLToDist, HTMLPage(employees), 'utf-8');
};

// start promptManager function
promptManager();