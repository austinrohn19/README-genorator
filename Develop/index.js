// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");

const genorateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [ {
    type: "input",
    message: "what is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "describe what your project is about?",
    name: "Description"
}, {
    type: "input",
    message: "table of contents",
    name: "Table of Contents"
}, {
    type: "input",
    message: "what files did you have to install to make this work properly?",
    name: "Installation"
}, {
    type: "input",
    message: "How do you use this project?",
    name: "Usage"
}, {
    type: "input",
    message: "what licenses do you need to use for this project?",
    name: "License"
}, {
    type: "input",
    message: "who contributed to this project?",
    name: "Contributing"
}, {
    type: "input",
    message: "how do we go about testing this Project?",
    name: "Tests"
}, {
    type: "input",
    message: "If you need to contact me for questions",
    name: "Questions"
}, {
    type: "input",
    message: "what is your Github Username?",
    name: "Github"
}, {
    type: "input",
    message: "please provide your Email Address?",
    name: "Email"
},
]

// TODO: Create a function to write README file
function writeToFile(filename, data) {

    fs.writeFile(filename, data, function (err) {
        console.log(filename)
        console.log(data)

        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function (data) {
            writeToFile("README.md", genorateMarkdown(data));
            console.log(data)
        })
}

// Function call to initialize app
init();
