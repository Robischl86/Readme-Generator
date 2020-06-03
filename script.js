var inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([

    {
      type: "input",
      message: "Project Title: ",
      name: "title"
    },
    {
      type: "input",
      message: "Project Description: ",
      name: "description"
    },
    {
      type: "input",
      message: "Screenshot Link: ",
      name: "screenshot"
    },
    {
      type: "input",
      message: "GitHub Username: ",
      name: "username"
    },
    {
      type: "input",
      message: "Email: ",
      name: "email"
    },
    {
      type: "input",
      message: "Installation: ",
      name: "installation"
    },
    {
      type: "input",
      message: "Usage: ",
      name: "usage"
    },
    {
      type: "input",
      message: "License: ",
      name: "license"
    },
    {
      type: "input",
      message: "Contributors: ",
      name: "contributors"
    },
    {
      type: "input",
      message: "Tests: ",
      name: "tests"
    },
    {
      type: "input",
      message: "Questions: ",
      name: "questions"
    }

  ])
  .then(function(response) {
    console.log(response);

    let projectTitle = JSON.stringify(response.title);
    projectTitle.id = "projectTitle";

    let description = JSON.stringify(response.description);
    description.id = "description";

    let screenshot = JSON.stringify(response.screenshot);
    console.log(screenshot)

    let username = JSON.stringify(response.username);
    username.id = "username";

    let email = JSON.stringify(response.email);
    email.id = "email"

    let installation = JSON.stringify(response.installation);

    let usage = JSON.stringify(response.usage);

    let license = JSON.stringify(response.license);

    let contributors = JSON.stringify(response.contributors);

    let tests = JSON.stringify(response.tests);

    let questions = JSON.stringify(response.questions);



    console.log(projectTitle);
    console.log(description);
    console.log(username);
    console.log(email);


    let filename = response.title.split(' ').join('_') + ".md";



    fs.writeFile(filename, ("## " + projectTitle + `\n`), function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Success!");
    });
//////////////////////////////////////////////

    fs.appendFileSync(filename, ("This project was created by " + username + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## " + description + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("<img src=screenshot />")), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Installation: " + installation + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Usage: " + usage + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## License: " + license + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Contributors: " + contributors + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Tests: " + tests + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Questions: " + questions + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

  });


  //refer to 18:58 on May 13 vid, activity 14 for week 8