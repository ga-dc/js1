// API Docs at: 
// http://www.omdbapi.com

var $dropdown = $("#movie-select");
var $form = $("#search")
var $input = $("#movie-search")
var $detail = $("#movie-detail")

$dropdown.hide()
$form.on("submit", function(e){
  e.preventDefault()
  var url = "http://www.omdbapi.com/?s=" + $input.val()
  $.get(url, function(response){
    console.log(response)
    buildDropdown(response.Search)
  })
})

$dropdown.on("change", function(e){
  var $selected = $(this).find(":selected");
  var id = $selected.attr("id")
  var url = "http://www.omdbapi.com/?i=" + id
  $.get(url, function(response){
    $detail.html("<h2>"+response.Title+"</h2>")
    $detail.append("<img src='"+response.Poster+"'>")
  })
})

function buildDropdown(movies){
  movies.forEach(function(movie){
    var $option = $("<option id='"+movie.imdbID+"'>"+movie.Title+"</option>")
    $dropdown.append($option)
  })
  $dropdown.show();
}