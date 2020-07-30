const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const employees = [];
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//MANAGER CREATED//
const employmentType = [{
    type: "list",
    name: "role",
    choices: [
        "Manager",
        "Intern",
        "Engineer",
        "Done adding staff"
    ]
}];

const allStaffQuestions = [{

    type: "input",
    message: "What is your name?",
    name: "name"
},
{
    type: "input",
    message: "What is your id number?",
    name: "id"
},
{
    type: "input",
    message: "What is you email address?",
    name: "email"
}];

const engineerQuestion = [{

    type: "input",
    message: "What is you GitHub username?",
    name: "github"
}];

const internQuestion = [{

    type: "input",
    message: "What School do you go to?",
    name: "school"
}];

const managerQuestion = [{

    type: "input",
    message: "What is your office number?",
    name: "officeNumber"
}];

function init() {
    inquirer
        .prompt([...employmentType]).then((data) => {
            if (data.role === "Manager") {
                addManager();
            } else if (data.role === "Intern") {
                addIntern();
            } else if (data.role === "Engineer") {
                addEngineer();
            } else {
                console.log(employees)
                console.log("No more employee's")
                writeToFile("./output/team.html", render(employees))
            }
        })
}

function addManager() {
    inquirer
        .prompt([...allStaffQuestions, ...managerQuestion])
        .then(({ name, id, email, officeNumber }) => {
            let manager = new Manager(name, id, email, officeNumber);
            if (name === "" && id === "" && email === "" && officeNumber === "" && !isNaN(officeNumber)) {
                console.log("please enter the correct information");
                addManager();
            } else {
                employees.push(manager);
                init();
            };

        });

};

function addIntern() {
    inquirer
        .prompt([...allStaffQuestions, ...internQuestion])
        .then(({ name, id, email, school }) => {
            let intern = new Intern(name, id, email, school);
            if (name === "" && id === "" && email === "" && school === "") {
                console.log("please enter the correct information");
                addIntern();
            } else {
                employees.push(intern);
                init();

            };

        });
};


function addEngineer() {
    inquirer
        .prompt([...allStaffQuestions, ...engineerQuestion])
        .then(({ name, id, email, github }) => {
            let engineer = new Engineer(name, id, email, github);
            if (name === "" && id === "" && email === "" && github === "") {
                console.log("please enter the correct information");
                addEngineer();
            } else {
                employees.push(engineer);
                init();


            };
        })
}

function writeToFile(filename, data) {
    fs.writeFile(filename, data, err => {
        if (err) {
            throw err;
        }
        console.log("Successful!!");
    })
}

init()
