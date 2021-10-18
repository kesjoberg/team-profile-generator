const Employee = require('../lib/Employee')

describe('name', () =>{
  it('should return the name', () =>{
    const employee = new Employee('Karna', 1, "me@me.com")
    expect(employee.name).toBe('Karna')
  })
})

describe('id', () =>{
  it('should return the id', () =>{
    const employee = new Employee('Karna', 1, "me@me.com")
    expect(employee.id).toBe(1)
  })
})

describe('name', () =>{
  it('should return the email', () =>{
    const employee = new Employee('Karna', 1, "me@me.com")
    expect(employee.email).toBe('me@me.com')
  })
})

describe('getName', () =>{
  it('should return the name of the Employee', () =>{
    const employee = new Employee('Karna', 1, "me@me.com")

    expect(employee.getName()).toEqual('Karna');
  });
}); 

describe('getId', () =>{
  it('should return the id of the Employee', () =>{
    const employee = new Employee('Karna', 1, "me@me.com")
  
    expect(employee.getId()).toEqual(1);
  });
}); 

describe('getEmail', () =>{
  it('should return the emailof the Employee', () =>{
    const employee = new Employee('Karna', 1, "me@me.com")

    expect(employee.getEmail()).toEqual('me@me.com');
  });
}); 


describe('getRole', () =>{
  it('should return the role title of Employee', () =>{
    const employee = new Employee('Karna', 1, "me@me.com")
    expect(employee.getRole()).toEqual('Employee');
  });
});