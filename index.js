function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

$(document).ready(function (){
  handlebarsSetup()
});

function searchRepositories(){
  $("#results, #details, #errors").empty()
  var search = $('#searchTerms').val();
  $.ajax({
    method: "GET",
    url: `https://api.github.com/search/repositories?q=${search}`,
    error: displayError
  }).done(function(data){
    var src = $("#repository-template")[0].innerHTML
    var template = Handlebars.compile(src)
    var repoList = template(data.items)
    $("#results").append(repoList)
  })
}

function displayError(){
  var msg = "I'm sorry, there's been an error. Please try again."
  $("#errors").append(`${msg}`);
}
