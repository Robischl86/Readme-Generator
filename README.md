# Automatic Readme Generator
This project was created by Robischl86
## Table of Contents
1. [Description](#description) 
 2. [Screenshot](#screenshot) 
 3. [Installation](#installation) 
 4. [Usage](#usage) 
 5. [License](#license) 
 6. [Contributors](#contributors) 
 7. [Tests](#tests) 
 8. [Questions](#questions) 
## Description
This application uses the Node.js File System and Inquirer modules to create a clean and responsive readme file based. After running the script in the node terminal, the user is presented with a series of prompts relating to their project. The application then writes the information into a markdown file to be used as the user's readme.
## Screenshot
![Screenshot](screenshot.png?raw=true) 
## Installation
This application requires an npm install of Inquirer.js.
## Usage
After installing the required modules and opening the script.js in node, the user will be be presented with a series of questions about their project. The user will be asked to enter their project name, description, relative filepath to their screenshot link, GitHub username, email, installation requirements, usage, license, contributors, tests, and questions. Once all of the information is entered, the application will take the user's input and write a markdown file based on the responses, thereby generating the user's readme file.
## Contributors

## Tests

## Questions
Q: How do I run the application?
A: Run the file script.js from the command line.

Q: Will the application automatically save my markdown file upon completion?
A: It will write the content of the readme into a markdown file called generatedREADME.md. However, the application will overwrite any previous content every time you run it, so be sure to save your work.

Q: How do I provide my license text?
A: License text must be entered into a text file called license.txt. Every time the application is run, it will read the license.txt file and append its contents to the markdown.

## License
MIT License

Copyright (c) 2020 Levi Robischon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
