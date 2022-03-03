const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('Intern');

// return`
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
            <div class="column is-one-quarter">
                <div class="box">
                    <div class="has-background-info p-3">
                        <h2 class="subtitle is-4 has-text-white mb-2">
                            Cherry
                        </h2>
                        <h3 class="subtitle is-6 has-text-white">
                            Manager
                        </h3>
                        <i class="fa-solid fa-mug-hot"></i>
                    </div>
                    <div>
                        <div class="box mb-0 pt-2 pb-2 mt-4">
                            ID: 1
                        </div>
                        <div class="box mb-0 pt-2 pb-2">
                            Email: <a href="mailto: jhaskf@jkh.com">sdfjk@kjshf.com</a>
                        </div>
                        <div class="box mb-0 pt-2 pb-2">
                            Office Number: 1
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </body>
</html>
//`