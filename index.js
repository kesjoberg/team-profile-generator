const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const employee = new Employee;

function initQuestion(){
  inquirer
    .prompt(
    {
      type: 'input',
      message: "Welcome to the Team Profile Generator! Are you ready to start entering the data for your Team Manager?",
      name: 'uread',
    },)
}

function askQuestions(){
  inquirer
    .prompt(
    {
      type: 'input',
      message: "What is this team member's name?",
      name: 'name',
    },
    {
      type: 'input',
      message:   "What is the employee's ID number?",
      name: 'id',
    },
    {
      type: 'input',
      message:  "What is the employee's E-mail?",
      name: 'email',
    },
    {
      type: 'input',
      message:  "What is the employee's office number?",
      name: 'officeNumber',
    })
    .then(response =>
      askMoreTeamMembers())
}

  
function askMoreTeamMembers(){
  inquirer
    .prompt(
      {
        type: 'list',
        message:  "Select the next team member you would like to complete or select 'Finish' if you are done building your team.",
        choices: [ 'Engineer', 'Intern', 'Finished'],
        name: 'nextQuestion',
      })
     .then(response => {
      if(response === 'Engineer'){
        engineerQuestions();
      } else if(response === 'Intern') {
        internQuestions();
      } else {
        endQuestions();
      }
     })
}

function engineerQuestions() {
  inquirer
    .prompt(
      {
        type: 'input',
        message: "What is the engineer's GitHub user name",
        name: 'github',
      },
    )
    .then(response =>
      askMoreTeamMembers())
} 
function internQuestions() {
  inquirer
    .prompt(
      {
        type: 'input',
        message: "What school does the intern attend?",
        name: 'school',
      },
    )
    .then(response =>
      askMoreTeamMembers())
} 

askQuestions();

