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

function showCommits(repo_link){
  var search = $('#searchTerms').val();
  var owner = repo_link.dataset.owner;
  var repository = repo_link.dataset.repository;
  $.ajax({
    method: "GET",
    url: `https://api.github.com/repos/${owner}/${repository}/commits`,
    error: displayError
  }).done(function(data){
    var src = $("#commit-template")[0].innerHTML
    var template = Handlebars.compile(src)
    var commitList = template(data)
    $("#details").append(commitList)
  })
}

function displayError(){
  var msg = "I'm sorry, there's been an error. Please try again."
  $("#errors").append(`${msg}`);
}
