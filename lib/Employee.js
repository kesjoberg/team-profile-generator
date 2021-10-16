const Mangaer = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

class Employee {
  constructor(name, id, email, role){
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName(name){
    return this.name;
  }
  getId(){
    return this.id;
  }
  getEmail(){
    return this.email;
  }
  getRole(){
    return "Employee"
  }
}

module.exports = Employee;










