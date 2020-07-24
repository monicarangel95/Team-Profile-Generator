const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const team = [];
const idArray = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//MANAGER CREATED//
function appMenu() {
    function createManager() {
        console.log("Build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "manager",
                message: "Manager. Please enter your name.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter at least one character.";
                }
            },
            {
                type: "input",
                name: "managerEmail",
                message: "Please enter your email.",
                validate: answer => {
                    const pass = answer.match(
                        /\S+@\S+\.\S+/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a valid email address.";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "Please enter your ID.",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-9]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
            {
                type: "input",
                name: "managerPhone",
                message: "Please enter your phone number.",
                validate: answer => {
                    if (answer !== "") {
                        return true;
                    }
                    return "Please enter phone number.";
                }
            },

            {
                type: "number",
                name: "teamSize",
                message: "Please enter the number of employees you have. (Numbers only)",
                validate: answer => {
                    const pass = answer.match(
                        /^[1-120]\d*$/
                    );
                    if (pass) {
                        return true;
                    }
                    return "Please enter a positive number greater than zero.";
                }
            },
        ]).then(answers => {
            const manager = new Manager(answers.manager, answers.managerEmail, answers.managerID, answers.managerPhone, answers.teamSize);
            team.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        });
//inquirer prompts for engineer or intern
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            }
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        });


    }

    createManager();

}

appMenu();