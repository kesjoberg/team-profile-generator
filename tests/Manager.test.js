const Manager = require('../lib/Manager')

describe('getOfficeNumber', () =>{
  it('should return the office number of the manager', () =>{
    const manager = new Manager();
    const officeNumber = '1234';

    manager.getOfficeNumber(officeNumber);

    expect(manager.getOfficeNumber()).toEqual(officeNumber);
  });
});

describe('getRole', () =>{
  it('should return the role title of Manager', () =>{
    expect(new Manager('Manager').getRole()).toEqual('Manager');
  });
});


