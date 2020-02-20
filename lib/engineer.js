
const Employee = require("./employee.js");
const main = require("../generate")

class Engineer extends Employee {
    constructor(name, id, email, github){
    super(name, id, email);
    this.github = github;
    }
    getRole() {
        return "Engineer"
    }
    getGithub() {
        return this.github;
    }
    getHTML() {
        return main.engineer(this); 
    } 
 };

 module.exports = Engineer;