const headerCard = function () {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
    <title>Team Profile Generator - Sarah Salvini</title>

<style>
.display-4 {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; 
  font-weight: bold;
}

.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
        
.jumbotron {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center; 
}

.card {
  margin: 10px;
}

ul {
  width: 0 auto;
}
      
</style>
</head>
<body>
    
<div class="jumbotron jumbotron-fluid bg-info text-white">
      <h1 class="display-4 text-center">Team Profile</h1>
      <h1 class="display-4 text-center"></h1>
  </div>`
  
};

// manager card
const managerCard = function(data) {
  return `
  <div class="container">
     <div class="card text-black bg-light" style="width: 18rem;">
              <div class="card-body bg-info ">
                  <h1 class="manager-name text-white text-center">${data.name}</h1>
                  <h4 class="text-white text-center"><i class="fas fa-user"></i>&nbsp; Manager</h4>
              </div>
              <div class="container">
                <ul class="list-group list-group" style="padding-top:30px;padding-bottom:30px;">
                  <li class="list-group-item">ID: ${data.id} </li>
                  <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                  <li class="list-group-item">Office Number: ${data.officeNumber}</li>
                </ul>
        </div>
    </div>`
  };
  

// engineer card
const engineerCard = function(data) {
  return `
    <div class="card text-black bg-light" style="width: 18rem;">
        <div class="card-body bg-info ">
              <h1 class="manager-name text-white text-center">${data.name}</h1>
              <h4 class="text-white text-center"><i class="fas fa-laptop"></i>&nbsp; Engineer</h4>
        </div>
        <div class="container">
                <ul class="list-group list-group" style="padding-top:30px;padding-bottom:30px;">
                  <li class="list-group-item">ID: &nbsp; ${data.id} </li>
                  <li class="list-group-item">Email: &nbsp; <a href="mailto:${data.email}">${data.email}</a></li>
                  <li class="list-group-item">GitHub: &nbsp; <a href="https://github.com/${data.github}">${data.github}</a></li>
                </ul>
          </div>
      </div>`
  };

  
// intern card
const internCard = function(data) {
  return `
    <div class="card text-black bg-light" style="width: 18rem;">
            <div class="card-body bg-info ">
                <h1 class="manager-name text-white text-center">${data.name}</h1>
                <h4 class="text-white text-center"><i class="fas fa-book"></i>&nbsp; Intern</h4>
            </div>
            <div class="container">
                <ul class="list-group list-group" style="padding-top:30px;padding-bottom:30px;">
                  <li class="list-group-item">ID: &nbsp; ${data.id}</li>
                  <li class="list-group-item">Email: &nbsp; <a href='#'>${data.email}</a></li>
                  <li class="list-group-item">School:&nbsp;${data.school}</li>
                </ul>
            </div>
      </div>`
};

const endCard = function() {
  return `</div>
    </div>
</div>  
</body>
</html>`
};
  
// exporting all cards
module.exports = {
  manager: managerCard,
  engineer: engineerCard,
  intern: internCard,
  header: headerCard,
  footer: endCard,
}