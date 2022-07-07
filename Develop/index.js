// TODO: Include packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    /* Pass your questions in here */
    {
        name: 'firstName',
        message: 'What is your first name?'
    },
    {
        name:'lastName',
        message:'What is your last name?'
    },
    {
        name:'age',
        message:'How old are you?'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    
    const readmeMD = `${answers.firstName}  ${answers.lastName} is ${answers.age} years old`;
    
    console.log(readmeMD)

    // TODO: Create a function to write README file
    
    fs.writeFile('README.md', readmeMD, (err) => {
        if(err) {console.log(err)}
        else{console.log('ReadME created!')}
    })
  })





// Intial code before working with my tutor -------->

// const questions = ["Input user story", "Input acceptance criteria","Input other requirements"];
// returning the array of command line arguments
// this.InputUserStory= 
// this.InputAcceptanceCriteria=
// this.InputOtherRequirements= 

// console.log(process.argv);


// function writeToFile(fileName, data) {
//     const writeToFile = function(fileName, data) {
//         return fileName + ", " + data + "!";
//       };
// }

// // TODO: Create a function to initialize app
// // referenced stackoverflow src= https://stackoverflow.com/questions/7884081/what-is-the-use-of-the-init-usage-in-javascript
// function init() {
//     // initialisation stuff here
//   }
  
//   // elsewhere in code
//   init();

// // Function call to initialize app
// init();
