const Intern = require('../lib/Intern')

describe('school', () =>{
  it('should return the name', () =>{
    const intern = new Intern('Karna', 1, "me@me.com", 'UMN')
    expect(intern.school).toBe('UMN')
  })
})

describe('getSchool', () =>{
  it('should return the school the Intern attends', () =>{
    const intern = new Intern('Karna', 1, "me@me.com", 'UMN')

    expect(intern.getSchool()).toEqual('UMN');
  });
}); 

describe('getRole', () =>{
  it('should return the role title of Intern', () =>{
    const intern = new Intern('Karna', 1, "me@me.com", 'UMN')

    expect(intern.getRole()).toEqual('Intern');
  });
});