const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

getInfo = function() {
    const manager = Manager.managerInput();
    console.log(manager);
    addNewTeamMember();

};

addNewTeamMember = function() {
    inquirer
        .prompt({
            type: 'confirm',
            name: 'newTeamMember',
            message: "Would you like to add more team members?",
            default: false
        },
        {
            type: 'list',
            name: 'eOrI',
            message: "Would you like to add a new Engineer or Intern?",
            choices: ['New Engineer', 'New Intern']            
        }).then(({ eOrI}) => {
            if(eOrI === 'New Engineer') {
                Engineer.engineerInput();
            }
            if(eOrI === 'New Intern') {
                Intern.internInput();
            }
        });
};

getInfo();