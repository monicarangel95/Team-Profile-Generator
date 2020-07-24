// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//Const to require Employee class
//const to require Employee class
const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager";
    }
    getOfficeNumber(){
        return this.officeNumber;
    }
}
module.exports = Manager;