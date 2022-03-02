const Engineer = require('../lib/Engineer');

test('creates an engineer team member object', () => {
    const engineer = new Engineer('Mary');

    expect(engineer.name).toBe('Mary');
    expect(engineer.employeeId).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.stringContaining('@'));
    expect(engineer.github).toEqual(expect.any(String));
});