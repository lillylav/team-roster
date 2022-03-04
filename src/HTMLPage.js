// 
generateEmployees = teamArray => {
    const { manager, engineers, interns } = teamArray;

    console.log(manager);
    console.log(engineers);
    console.log(interns);

    // create manager card
    generateManager = Manager => {

        return`
    <div class="column is-one-quarter">
        <div class="box">
            <div class="has-background-info p-3">
                <h2 class="subtitle is-4 has-text-white mb-2">
                    ${Manager.getName()}
                </h2>
                <h3 class="subtitle is-6 has-text-white">
                    ${Manager.getRole()}
                </h3>
                <i class="fa-solid fa-mug-hot"></i>
            </div>
            <div>
                <div class="box mb-0 pt-2 pb-2 mt-4">
                    ID: ${Manager.getId()}
                </div>
                <div class="box mb-0 pt-2 pb-2">
                    Email: <a href="mailto:${Manager.getEmail()}" target="_blank">${Manager.getEmail()}</a>
                </div>
                <div class="box mb-0 pt-2 pb-2">
                    Office Number: 
                </div>
            </div>
        </div>
    </div>
    `
    };
    //${Manager.getOfficeNumber()}
    // create engineer cards
    generateEngineers = Engineer => {
        //forEach but that won't work because they are not organized in an array by type...
            return`
    <div class="column is-one-quarter">
        <div class="box">
            <div class="has-background-info p-3">
                <h2 class="subtitle is-4 has-text-white mb-2">
                    ${Engineer.getName()}
                </h2>
                <h3 class="subtitle is-6 has-text-white">
                    ${Engineer.getRole()}
                </h3>
                <i class="fa-solid fa-mug-hot"></i>
            </div>
            <div>
                <div class="box mb-0 pt-2 pb-2 mt-4">
                    ID: ${Engineer.getId()}
                </div>
                <div class="box mb-0 pt-2 pb-2">
                    Email: <a href="mailto:${Engineer.getEmail()}" target="_blank">${Engineer.getEmail()}</a>
                </div>
                <div class="box mb-0 pt-2 pb-2">
                    Github: 
                </div>
            </div>
        </div>
    </div>
    `
    };
    // <a href="github.com/${Engineer.getGithub()}" target="_blank">${Engineer.getGithub()}</a>
    // create intern cards
    generateInterns = Intern => {
        //forEach but that won't work because they are not organized in an array by type...
            return`
    <div class="column is-one-quarter">
        <div class="box">
            <div class="has-background-info p-3">
                <h2 class="subtitle is-4 has-text-white mb-2">
                    ${Intern.getName()}
                </h2>
                <h3 class="subtitle is-6 has-text-white">
                    ${Intern.getRole()}
                </h3>
                <i class="fa-solid fa-mug-hot"></i>
            </div>
            <div>
                <div class="box mb-0 pt-2 pb-2 mt-4">
                    ID: ${Intern.getId()}
                </div>
                <div class="box mb-0 pt-2 pb-2">
                    Email: <a href="mailto:${Intern.getEmail()}" target="_blank">${Intern.getEmail()}</a>
                </div>
                <div class="box mb-0 pt-2 pb-2">
                    School: 
                </div>
            </div>
        </div>
    </div>
    `
    };
    // ${Intern.getSchool()}

    const teamCards = [];

    // teamCards.push(teamArray.map(Manager => generateManager(Manager)));
    // teamCards.push(teamArray.map(Engineer => generateEngineers(Engineer)));
    // teamCards.push(teamArray.map(Intern => generateInterns(Intern)));

    // console.log(teamCards);

    return teamCards.join('');
};

// generate entire webpage
module.exports = employees => {
    return`
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <title>Team Roster</title>
    </head>
    <body>
        <div class="has-background-danger">
            <h1 class="title is-1 has-text-weight-normal has-text-white has-text-centered p-6">
                My Team
            </h1>
        </div>
        <section>
            ${generateEmployees(employees)}
        </section>
    </body>
</html>
`
};