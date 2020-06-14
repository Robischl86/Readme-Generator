var inquirer = require("inquirer");
const fs = require("fs");
let filename = "./generatedREADME.md"


function generateREADME() {
inquirer
  .prompt([

    {
      type: "input",
      message: "GitHub Username: ",
      name: "username"
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
      message: "Contributors: ",
      name: "contributors"
    },
    {
      type: "input",
      message: "Tests: ",
      name: "tests"
    },
    {
      type: 'confirm',
      message: 'Add a question?',
      name: 'confirm'
    }

  ])
  .then(function(response) {
    console.log(response);

    let projectTitle = response.title;

    let description = response.description;

    let screenshot = response.screenshot;

    let username = response.username;

    let installation = response.installation;

    let usage = response.usage;

    let contributors = response.contributors;

    let tests = response.tests;

    fs.writeFile(filename, ("# " + projectTitle + `\n`), function (err) {
      if (err) {
        return console.log(err);
      }



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

    fs.readFile("license.txt", "utf8", function(error, info) {

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

    fs.appendFileSync(filename, ("## Questions" + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }

  });
    if(response.confirm){
      askQuestion();
    }
    else {
      console.log("Success!")
    }
  });
};


function askQuestion() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Question: ',
      name: 'question',
    },
    {
      type: 'input',
      message: 'Answer: ',
      name: 'answer',
    },
    {
      type: 'confirm',
      message: 'Add another question? ',
      name: 'confirm',
    }
  ]).then(function(FAQ){

    console.log(FAQ);
    fs.appendFileSync(filename, ("Q: " + FAQ.question + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }
    fs.appendFileSync(filename, ("A: " + FAQ.answer + `\n` + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }
    if(FAQ.confirm){
      askAnotherQ();
    }
    else {
      console.log("Success!")
    }
  });
}

function askAnotherQ() {
  inquirer.prompt([
    {
      type: 'input',
      message: 'Question: ',
      name: 'question',
    },
    {
      type: 'input',
      message: 'Answer: ',
      name: 'answer',
    },
    {
      type: 'confirm',
      message: 'Add another question? ',
      name: 'confirm',
    }
  ]).then(function(anotherQ){

    console.log(anotherQ);
    fs.appendFileSync(filename, ("Q: " + anotherQ.question + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }
    fs.appendFileSync(filename, ("A: " + anotherQ.answer + `\n` + `\n`)), function (err) {
      if (err) {
        return console.log(err);
      }
    }
    if(anotherQ.confirm){
      askQuestion();
    }
    else {
      console.log("Success!")
    }
  });
}

generateREADME();