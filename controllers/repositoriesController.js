function repositoriesController(data){
  var src = $("#repository-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var repoList = template(data.items)
  $("#results").append(repoList)
}