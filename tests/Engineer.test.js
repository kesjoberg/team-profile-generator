const Engineer = require('../lib/Engineer')

describe('github', () =>{
  it('Creates an office number', ()=> {
    const engineer = new Engineer('Karna', 1, 'me@me.com', 'kesjoberg')

    expect(engineer.github).toBe('kesjoberg')
  })
})

describe('getGtithub', () =>{
  it('should return the github username of the Engineer', () =>{
    const engineer = new Engineer('Karna', 1, 'me@me.com', 'kesjoberg')

    expect(engineer.getGithub()).toEqual('kesjoberg');
  });
}); 

describe('getRole', () =>{
  it('should return the role title of Engineer', () =>{
    const engineer = new Engineer('Karna', 1, 'me@me.com', 'kesjoberg')
    expect(engineer.getRole()).toEqual('Engineer');
  });
});