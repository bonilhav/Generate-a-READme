// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require("util");
const generateMd = require("./utils/generateMarkdown");

// Set the fs.writeFile function to use promises
const writeFileAsync = util.promisify(fs.writeFile);

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a brief description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What dependencies does the user need to install?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What usage information does the user need to know?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What information does the user need to know about contributing to this reporsitory?',
        name: 'contributors',
    },
    {
        type: 'input',
        message: 'If you have written any tests please provide them here',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license should this project have?',
        name: 'license',
        choices: [
            'MIT License',
            'Apache License',
            'GNU General Public License',
            'Unlicensed',
        ]
    },
    {
        type: 'input',
        message: 'What is your GitHub user name?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
    
];

const promptQuestions = () => {
    return inquirer
        .prompt(questions);
}

//Writes READme file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data);
}

//Function to initialize app
const init = async () => {
    try {
        const answers = await promptQuestions();

        const fileContent = generateMd(answers);

        await writeToFile('./README.md', fileContent);

        console.log('Successful READme created');

    } catch (err) {
        console.error("Error. README file not created.");
        console.log(err);
    }
}

// Function call to initialize app
init();