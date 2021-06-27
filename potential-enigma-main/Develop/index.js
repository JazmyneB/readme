// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const markdDown = require(".utils/generateMarkdown");

// TODO: Create an array of questions for user input
// const questions = ["What is your Project Title?", "Please include a Description of your Project:", "Would you like to include Table of Contents? (Y/N)", "What are the steps required to install your project?", "Provide Instructions and Examples for use", "Are there any Collaborators? (Y/N)"];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
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
            message: "Would you like to include a Table Of Contents section?",
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
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide instructions and examples for use:",
            validate: (usageInput) => {
                if (usageInput){
                    return true;
                } else{
                    console.log("Please provide instructions for Use!")
                    return false;
                }
            }


        },
        {
            type: 'confirm',
            name: 'confirmCollab',
            message: "Are there any collaborators?",
            default: false
        },
        {
            type: 'input',
            name: 'credits',
            message: "List your collaborators with the Links to their Github profiles:",
            when: ({confirmCollab}) => {
                if (confirmCollab){
                    return true;
                } else {
                    return false;
                }
            }        
        },
        {
            type: "confirm",
            name: "confirmL",
            message: "Would you like to include a license?",
            default: true

        },
        {
            type: 'list',
            name: 'license',
            message: "Which License would you like to include?",
            choices: ["MIT", "Apache", "GPL"],
            when: ({confirmL}) => {
                if (confirmL){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: "What is your GitHub Username? (Required)",
            validate: (nameInput) =>{
                if (nameInput){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: (emailInput) => {
                if (emailInput){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Add guidelines for developers to contribute to your application: '
        },
        {
            type: 'input',
            name: 'test',
            message: "Write tests for your application, then provide examples on how to run them"
        }
    ])
}
//promptUser().then(answers => console.log(answers));

// promptUser()
// .then(answers =>{
//     console.info('Answers', answers);
//     writeToFile(answers.username+"readme.md", answers);
// })

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, JSON.stringify(data, null, '\t'), function(err) {

        if (err) {
          return console.log(err);
        }
    
        console.log("Success!");
    
      });



}

// TODO: Create a function to initialize app
function init() {
    promptUser().then(function(data){
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
