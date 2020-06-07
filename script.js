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
      message: "Please enter the filename of your screenshot: ",
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
      message: "Usage instructions: ",
      name: "usage"
    },
    {
      type: "input",
      message: "Please enter the filename of your license document: ",
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

    let projectTitle = response.title;

    let description = response.description;

    let screenshot = response.screenshot;

    let username = response.username;

    let email = response.email;

    let installation = response.installation;

    let usage = response.usage;

    let license = response.license;

    let contributors = response.contributors;

    let tests = response.tests;

    let questions = response.questions;

    let filename = response.title.split(' ').join('-') + ".md";

    let screenshotLink = ("https://github.com/" + username + "/" + filename + "/blob/master/" + screenshot)

    fs.writeFile(filename, ("# " + projectTitle + `\n`), function (err) {
      if (err) {
        return console.log(err);
      }

    });

    fs.appendFileSync(filename, ("\n This project was created by " + username + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Table of Contents" + `\n` + '[Description](#description)' + `\n` + '[Screenshot](#screenshot)' + `\n` + '[Installation](#installation)' + `\n` + '[Usage](#usage)' + `\n` + '[License](#license)' + `\n` + '[Contributors](#contributors)' + `\n` + '[Tests](#tests)' + `\n` + '[Questions](#questions)')), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Description" + `\n` + description + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Screenshot" + `\n` + `![Screenshot] (` + screenshotLink + `) \n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Installation" + `\n` + installation + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Usage" + `\n` + usage + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.readFile(license, "utf8", function(error, info) {

      if (error) {
        return console.log(error);
      }

      fs.appendFileSync(filename, ("## License" + `\n` + info + `\n`)), function (err) {
        if (err) {
          return console.log(err);
        }
      }
    
    });

    fs.appendFileSync(filename, ("## Contributors" + `\n` + contributors + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Tests" + `\n` + tests + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Questions" + `\n` + questions + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    console.log("Success!");
  });


