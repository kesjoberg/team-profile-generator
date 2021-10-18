const Manager = require('../lib/Manager')

describe('office number', () =>{
  it('Creates an office number', ()=> {
    const manager = new Manager('Karna', 1, 'me@me.com', 1234)

    expect(manager.officeNumber).toBe(1234)
  })
})

describe('getOfficeNumber', () =>{

  it('should return the office number of the manager using getOfficeNumber', () =>{
    const manager = new Manager('Karna', 1, 'me@me.com', 1234)
  

    expect(manager.getOfficeNumber()).toEqual(1234);
  });
}); 

describe('getRole', () =>{
  it('should return the role title of Manager', () =>{
    const manager = new Manager('Karna', 1, 'me@me.com', 1234)
    expect(manager.getRole()).toEqual('Manager');
  });
});


