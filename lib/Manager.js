const Employee = require('./Employee');


class Manager extends Employee {
    constructor(name = '', employeeId = '', email = '@', officeNumber = '') {
        super(name, employeeId, email);

        this.officeNumber = officeNumber;
    }

    // get manager information
    getOfficeNumber() {
        return this.officeNumber;
    };

    getRole() {
        return "Manager";
    };

};

module.exports = Manager;