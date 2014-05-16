ReviewMi.Collections.Movies = Backbone.Collection.extend({
  model: ReviewMi.Models.Movie,

  //to handle clicks on the search button to search for a movie
  searchOMDB: function (term, success) {
    //save reference to 'this'
    var self = this;
    //decode the URI encoded search term
    var searchTerm = decodeURI(term);

    console.log("search executed for : ", term);

    //perform ajax request to omdb to search for movie
    var request = $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'http://www.omdbapi.com/',
      data: { s: searchTerm }
    //what to do on success
    }).done(function (data) {
      if (data.Response != "False") {
        //if the search finds results, call parseOMDB function
        self.parseOMDB(data.Search);
      } else {
        console.log("this search is invalid");
      }
      //if a callback function was passed in, run this function
      if (typeof success === 'function') {
        success();
      }
    });
  },
  
  parseOMDB: function (moviesData) {
    _.each(moviesData, function(movieData) {

      //create a new movie object and set its variables
      var movie = new ReviewMi.Models.Movie();
      movie.set('title',movieData.Title);
      movie.set('year',movieData.Year);
      movie.set('imdbID',movieData.imdbID);
      movie.set('type',movieData.Type);

      //add this movie to the this collection
      this.add(movie);
    }, this);

    console.log('finished parsing search results', this.models);
    // ReviewMi.omdbApiCall.resolve();
  }
});