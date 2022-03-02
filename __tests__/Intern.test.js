const Intern = require('../lib/Intern');

test('creates an intern team member object', () => {
    const intern = new Intern('Tammy');

    expect(intern.name).toBe('Tammy');
    expect(intern.employeeId).toEqual(expect.any(String));
    expect(intern.email).toEqual(expect.stringContaining('@'));
    expect(intern.school).toEqual(expect.any(String));
});