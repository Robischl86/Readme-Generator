var inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([

    {
      type: "input",
      message: "GitHub Username: ",
      name: "username"
    },
    {
      type: "input",
      message: "Please enter the name of your remote repository: ",
      name: "repository"
    },
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
      message: "Email: ",
      name: "email"
    },
    {
      type: "input",
      message: "Installation requirements: ",
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

    let repository = response.repository;

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

    fs.writeFileSync(filename, ("# " + projectTitle + `\n`), function (err) {
      if (err) {
        return console.log(err);
      }

    });

    fs.appendFileSync(filename, ("This project was created by " + username + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Table of Contents" + `\n` + `1. [Description](#description) \n 2. [Screenshot](#screenshot) \n 3. [Installation](#installation) \n 4. [Usage](#usage) \n 5. [License](#license) \n 6. [Contributors](#contributors) \n 7. [Tests](#tests) \n 8. [Questions](#questions) \n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Description" + `\n` + description + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

    fs.appendFileSync(filename, ("## Screenshot" + `\n` + `![Screenshot](` + screenshot + `?raw=true) \n`)), function (err) {
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


