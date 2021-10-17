

const renderTeam = (team) =>{ 

  const generateManager = (manager) =>{
    return `<div class="card col-md-3 m-1 p-0" style="width: 18rem;">
      <div class="card-header text-white bg-primary mb-3">
        ${manager.getName()} <br>
        <i class="fas fa-mug-hot"></i>Manager
      </div>  
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.getId()}</li>
        <li class="list-group-item">Email:<span id='email'><a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></span></li> 
        <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
      </ul>
    </div>`
  }
  const generateEngineer = (engineer) =>{
    return `<div class="card col-md-3 m-1 p-0" style="width: 18rem;">
    <div class="card-header text-white bg-primary mb-3">
      ${engineer.getName()} <br>
      <i class="fas fa-glasses"></i> Engineer
    </div>
  
    
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.getId()}</li>
        <li class="list-group-item">Email: <span id='email'><a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></span></li>
        <li class="list-group-item">GitHub:<span id='github'><a target="_blank" href="https://github.com/${engineer.getGithub()}"> ${engineer.getGithub()}</a></span></li>
      </ul>
    </div>`
  }

  const generateIntern =(intern) =>{
    return `<div class="card col-md-3 m-1 p-0" style="width: 18rem;">
    <div class="card-header text-white bg-primary mb-3">
      ${intern.getName()} <br>
      <i class="fas fa-user-graduate"></i>Intern
    </div>
  
    
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.getId()}</li>
      <li class="list-group-item">Email:<span id='email'><a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></span></li> 
      <li class="list-group-item">School: ${intern.getSchool()}</li>
    </ul>
  </div>`
  }
  const engineerHtml = team.filter(employee => employee.getRole() === 'Engineer').map(engineer => generateEngineer(engineer)).join('')
  const internHtml = team.filter(employee => employee.getRole() === 'Intern').map(intern => generateIntern(intern)).join('')
  const managerHtml = team.filter(employee => employee.getRole() === 'Manager').map(manager => generateManager(manager))
  console.log(team);

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
    integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
    crossorigin="anonymous"
  />
    <title>My Team</title>
  </head>
  <header>
    <div class="jumbotron text-center text-white bg-danger">
      <h1 class="display-4">My Team!</h1>
    </div>
  
  </header>
  <body> 
    <div class="d-md-flex flex-wrap justify-content-around">
      ${managerHtml}
      ${engineerHtml}
      ${internHtml}
    </div>
  </body>
  </html>`


}
module.exports = renderTeam    