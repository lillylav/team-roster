const Manager = require('../lib/Manager');

test('creates a manager team member object', () => {
    const manager = new Manager('Cherry');

    expect(manager.name).toBe('Cherry');
    expect(manager.employeeId).toEqual(expect.any(String));
    expect(manager.email).toEqual(expect.stringContaining('@'));
    expect(manager.officeNumber).toEqual(expect.any(String));
});