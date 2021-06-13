// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { generateMarkdown, writeFile } = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const userQuestions = () => {
    return inquirer.prompt([{
            type: 'input',
            name: 'name',
            message: 'What is the Title of your Project? (required)',
            validate: projectName => {
                if (projectName) {
                    return true;
                } else {
                    console.log('Please enter your Projects Title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a detailed descriptions of your Project (required)',
            validate: descriptionBlock => {
                if (descriptionBlock) {
                    return true;
                } else {
                    console.log('please describe your project for us!');
                }
            }
        },
        {
            type: 'checkbox',
            name: 'language',
            message: 'What languages were used in this project? (Check all that apply!)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'BOOTSTRAP', 'NODE'],
            validate: languagesBlock => {
                if (languagesBlock) {
                    return true;
                } else {
                    console.log("Please tell us what languages this App was built with!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'learning',
            message: 'Please enter a description of what you learned from this project? (required)',
            validate: learningBlock => {
                if (learningBlock) {
                    return true;
                } else {
                    console.log('Some Learning had to be done!');
                }
            }
        },
        {
            type: 'input',
            name: 'meaning',
            message: 'Did this project stand out for you at all or have any special meaning to you?'
        },
        {
            type:'input',
            name:'link',
            message:'Please enter your websites GitHub link (Required!)',
            validate: gitHubLink => {
                if(gitHubLink) {
                    return true;
                } else {
                    console.log('Please enter the link to your GitHub repository!');
                    return false;
                }
            }
        },
        {
            type:'confirm',
            name:'endQuestions',
            message:'Is there anything else you would like to add to your REAM.ME about this project?',
            default: false
        }
    ]);
};
userQuestions()
.then(userQuestions => {
    return generateMarkdown(userQuestions);
})
.then(readMe => {
    return writeFile(readMe);
  })

// TODO: Create a function to write README file
function writeToFile() {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();