
const Employee = require("./employee.js");
const main = require("../generate.js")

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
    super(name,id,email);
    this.officeNumber = officeNumber;
    }
    getRole() {
        return "Manager"
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getHTML() {
        return main.manager(this); 
    } 
 };

 module.exports = Manager;