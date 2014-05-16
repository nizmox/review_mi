ReviewMi.Models.Movie = Backbone.Model.extend({
  urlRoot: '/movies',
  
  searchOMDB: function (imdbID, success) {
    //save reference to 'this'
    var self = this;

    console.log("search executed for : ", imdbID);

    //perform ajax request to omdb to search for movie
    var request = $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'http://www.omdbapi.com/',
      data: { i: imdbID }
    //what to do on success
    }).done(function (data) {
      // if the search finds results, call searchResults function
      if (data.Response != "False") {
        self.parseOMDB(data);
      } else {
        console.log("this search is invalid");
      }
      //if a callback function was passed in, run this function
      if (typeof success === 'function') {
        success();
      }
    });
  },

  parseOMDB: function (movieData) {
    this.set('actors',movieData.Actors);
    this.set('awards',movieData.Awards);
    this.set('country',movieData.Country);
    this.set('director',movieData.Director);
    this.set('genre',movieData.Genre);
    this.set('language',movieData.Language);
    this.set('metascore',movieData.Metascore);
    this.set('plot',movieData.Plot);
    this.set('poster',movieData.Poster);
    this.set('rated',movieData.Rated);
    this.set('released',movieData.Released);
    this.set('runtime',movieData.Runtime);
    this.set('title',movieData.Title);
    this.set('imdb_type',movieData.Type);
    this.set('writer',movieData.Writer);
    this.set('year',movieData.Year);
    this.set('imdb_id',movieData.imdbID);
    this.set('imdb_rating',movieData.imdbRating);
    console.log('model: ',this);
  }
});

// imdbVotes: "N/A"