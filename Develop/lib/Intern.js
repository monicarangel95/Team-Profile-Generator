// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
//Const to require Employee class
const Employee = require("./Employee");
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }
  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
    
}

//export to allow usage with NPM
module.exports = Intern;