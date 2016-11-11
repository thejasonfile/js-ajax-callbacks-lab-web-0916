function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function displayError(){
  var msg = "I'm sorry, there's been an error. Please try again."
  $("#errors").append(`${msg}`);
}
