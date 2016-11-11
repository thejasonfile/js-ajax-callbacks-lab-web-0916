function commitsController(data){
  var src = $("#commit-template")[0].innerHTML
  var template = Handlebars.compile(src)
  var commitList = template(data)
  $("#details").append(commitList)
}