const inquirer = require("inquirer");
const Manager = require("./lib/manager.js");
const Engineer = require("./lib/engineer.js");
const Intern = require("./lib/intern.js");
const generate = require("./generate");
const fs = require("fs");
const open = require("open");




//starting the header and footer elements to the HTML
const startProfile = [generate.header(), generate.footer()];

//starts with manager and prompts for information
function manager(){
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: `What is your manager's name?`
    },
    {
      type: "input",
      name: "id",
      message: `What is your manager's ID?`
    },
    {
      type: "input",
      name: "email",
      message: `What is your manager's email?`
    },
    {
      type: "input",
      name: "officeNumber",
      message: `What is your manager's office number?`
    }
  ])
}



//after inputting a manager, now select engineer or intern
function employees(){
  inquirer.prompt([
    {
      type: "list",
      name: "role",
      message:"Team members role?",
      choices: ["Engineer", "Intern", "Finished"]
    }
    //engineer: prompt the questions
  ]).then((answer)=> {
    if (answer.role === "Engineer"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is your engineer's name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is your engineer's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `What is your engineer's email?`
        },
        {
          type: "input",
          name: "github",
          message: `What is your engineer's GitHub??`
        }
        //after questions are answered take inputs and plug into html card for engineer
      ]).then((answers)=>{
        let engineer = new Engineer(answers.name, answers.id, answers.email,answers.github);
        startProfile.splice(startProfile.length-1, 0, engineer.getHTML());
        employees();
      })
    }

    //intern: prompt the questions
    if (answer.role === "Intern"){
      return inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: `What is your intern's name?`
        },
        {
          type: "input",
          name: "id",
          message: `What is your intern's ID?`
        },
        {
          type: "input",
          name: "email",
          message: `What is your intern's email?`
        },
        {
          type: "input",
          name: "school",
          message: `What is your intern's school?`
        }
        //after questions are answered take inputs and plug into html card for intern
      ]).then((answers)=>{
        let intern = new Intern(answers.name, answers.id, answers.email,answers.school);
        startProfile.splice(startProfile.length-1, 0, intern.getHTML());
        employees();
      })
    }

    // after all team members are entered, print into variables on cards
    return printHTML(startProfile);
  
  });
}


//write the file after team variables are inputted
function printHTML(startProfile){
  fs.writeFile("./output/teamProfile.html", startProfile, (err) => {
    if(err) {
      throw err;
    };
  });
  open("./output/teamProfile.html");
  };


// starts entire app
manager()

//managers info
.then((answers)=>{
  const manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber);
  startProfile.splice(startProfile.length-1,0,manager.getHTML());
  employees();
});






