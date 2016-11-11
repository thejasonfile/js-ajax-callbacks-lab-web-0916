function searchRepositoriesAdapter(){
  $("#results, #details, #errors").empty()
  var search = $('#searchTerms').val();
  $.ajax({
    method: "GET",
    url: `https://api.github.com/search/repositories?q=${search}`,
    error: displayError
  }).done(function(data){
    repositoriesController(data);
  })
}