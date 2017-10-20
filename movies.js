

angular.module('app', [])
  .controller('movieCtrl', movieCtrl);

function movieCtrl ($scope, $http) {

  $scope.movies = [];

  $scope.addNew = function (movie) {
    var moviePoster;
    var movieTitle;
    var movieYear;
    var movieapi = 'http://www.theimdbapi.org/api/find/movie?title=';
    movieapi += movie.title;
    movieapi += '&year=';
    movieapi += movie.year;
    $http.get(movieapi).success(function(response) {
	console.log(response);
        $scope.movies.push({
	   poster: response[0].poster.thumb,
	   title: response[0].title,
	   year: response[0].year,
           votes: 0
        });
    })
    .error(function() {
	console.log("jsons Error");
    });
    
    movie.title = '';
    movie.year = '';

  };

  $scope.upVote = function (movie) {
      movie.votes += 1;
  };

  $scope.downVote = function (movie) {
      movie.votes -= 1;
  };

}

