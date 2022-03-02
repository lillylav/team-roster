const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

promptManager = () => {
    console.log(`
    -----------------------------------------------
    
        Please enter manager information first.
        
    -----------------------------------------------
    `);




    // const mangager = new Manager(); 
    
    // manager.getName();
    // manager.getId();
    // manager.getEmail();
    // manager.getRole();
    // manager.getOfficeNumber();


};

// addNewTeamMember = function() {
//     return inquirer
//         .prompt([
//         {
//             type: 'confirm',
//             name: 'newTeamMember',
//             message: "Would you like to add more team members?",
//             default: false
//         },
//         {
//             type: 'list',
//             name: 'eOrI',
//             message: "Would you like to add a new Engineer or Intern?",
//             choices: ['New Engineer', 'New Intern']            
//         }]).then(({ eOrI}) => {
//             if(eOrI === 'New Engineer') {
//                 Engineer.engineerInput();
//             }
//             if(eOrI === 'New Intern') {
//                 Intern.internInput();
//             }
//         });
// };

initializePrompt();