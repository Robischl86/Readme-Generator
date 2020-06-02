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
    }
  ])
  .then(function(response) {
    console.log(response);

    let filename = response.title.split(' ').join('_') + ".md";

    fs.writeFile(filename, JSON.stringify(response, null, '\t'), function (err) {
        
      if (err) {
        return console.log(err);
      }

      console.log("Success!");
      
    });


  });


  //refer to 18:58 on May 13 vid, activity 14 for week 8