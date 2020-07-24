// TODO: Write code to define and export the Employee class
//Class creation for employee. This is the base class for all employees. All other employee types will have additional meta data.

class Employee {

    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }

}

//Export to allow NPM to use this module
module.exports = Employee;