const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const renderTeam = require('./src/teamBuilder')

const team =[];


const initQuestions = () =>{
  inquirer
    .prompt(
    {
      type: 'input',
      message: "Welcome to the Team Profile Generator! What is your team manager's name?",
      name: 'name',
    },
    {
      type: 'input',
      message:   "What is the team managers's ID number?",
      name: 'id',
    },
    {
      type: 'input',
      message:   "What is the team manager's e-mail?",
      name: 'email',
    },
    {
      type: 'input',
      message:  "What is the team manager's office number?",
      name: 'officeNumber',
    })
    .then(response => {
      const manager = new Manager(response.name, response.endQuestions, response.email, response.officeNumber)
      team.push(manager);
      askMoreTeamMembers()
      
    })
   
    
}
const engineerQuestions = () =>{
  inquirer
    .prompt(
    {
      type: 'input',
      message: " What is the engineer's name?",
      name: 'name',
    },
    {
      type: 'input',
      message:   "What is the engineer's ID number?",
      name: 'id',
    },
    {
      type: 'input',
      message:   "What is the engineer's e-mail?",
      name: 'email',
    },
    {
      type: 'input',
      message:  "What is the engineer's GitHub username?",
      name: 'github',
    })
    .then(response => {
      const engineer = new Engineer(response.name, response.endQuestions, response.email, response.github)
      team.push(engineer);
      askMoreTeamMembers()
    })
    
    
}
const internQuestions = () =>{
  inquirer
    .prompt(
    {
      type: 'input',
      message: " What is the intern's name?",
      name: 'name',
    },
    {
      type: 'input',
      message:   "What is the intern's ID number?",
      name: 'id',
    },
    {
      type: 'input',
      message:   "What is the intern's e-mail?",
      name: 'email',
    },
    {
      type: 'input',
      message:  "What school does the intern attend?",
      name: 'school',
    })
    .then(response => {
      const intern = new Intern(response.name, response.endQuestions, response.email, response.school)
      team.push(intern);
      askMoreTeamMembers()
    })
    

    
}

  
const askMoreTeamMembers = ()=> {
  inquirer
    .prompt(
      {
        type: 'list',
        message:  "Select the next team member you would like to complete or select 'Finish' if you are done building your team.",
        choices: [ 'Engineer', 'Intern', 'Finished'],
        name: 'role',
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


const endQuestions =() =>{
  buildTeam();
  console.log('Thank you for building your team, please go to the team.html to view your team.')
}

const buildTeam =() =>{
  fs.writeFile('team.html', renderTeam(team), 'utf-8')
}
initQuestions();

