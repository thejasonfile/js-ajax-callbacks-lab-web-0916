function showCommitsAdapter(repo_link){
  var search = $('#searchTerms').val();
  var owner = repo_link.dataset.owner;
  var repository = repo_link.dataset.repository;
  $.ajax({
    method: "GET",
    url: `https://api.github.com/repos/${owner}/${repository}/commits`,
    error: displayError
  }).done(function(data){
    commitsController(data);
  })
}