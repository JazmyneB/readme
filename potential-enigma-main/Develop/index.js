// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = reuire("fs");

// TODO: Create an array of questions for user input
const questions = ["What is your Project Title?", "Please include a Description of your Project:", "Would you like to include Table of Contents? (Y/N)", "What are the steps required to install your project?", "Provide Instructions and Examples for use", "Are there any Collaborators? (Y/N)"];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Project Title',
            message: "What is your Project Title?(Required)",
            validate: titleInput =>{
                if (titleInput){
                    return true;
                } else{
                    console.log('Please Enter Project Title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'Description',
            message: "Please Include a Description of your project: (Required)",
            validate: descInput => {
                if (descInput){
                    return true;
                } else {
                    console.log("Please include Description!");
                    return false;
                }
            }
        },
        {
            type: "confirm",
            name: "confirmTOC",
            message: "Would you like to include a Table Of Contents section? (Y/N)",
            default: true
        },
        {
            type: 'input',
            name: "install",
            message: "What are the steps required to install your project? (Required)",
            validate: installInput => {
                if (installInput){
                    return true;
                } else{
                    console.log('Please includes your Steps to Install!')
                    return false;
                }
            }
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
