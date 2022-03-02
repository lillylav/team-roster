const Employee = require('../lib/Employee');

test('creates an employeee super object', () => {
    const engineer = new Employee('Lilly');

    expect(engineer.name).toBe('Lilly');
    expect(engineer.employeeId).toEqual(expect.any(String));
    expect(engineer.email).toEqual(expect.stringContaining('@'));;
});