// the page to allow the user to create a new review
ReviewMi.Views.newReviewView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    this.template = _.template($('#newReviewView').html() );
  },

  render: function () {
    this.$el.html(this.template());

    //the text box where user search terms will be entered
    this.$searchText = $('#search-text');
  },

  events: {
    "click #search-btn": "search"
  },

  //to handle clicks on the search button to search for a movie
  search: function (event) {
    //save reference to 'this'
    var self = this;
    //prevent default form submit
    event.preventDefault();

    console.log("search executed",this.$searchText.val());

    //perform ajax request to omdb to search for movie
    var request = $.ajax({
      type: 'GET',
      dataType: 'json',
      url: 'http://www.omdbapi.com/',
      data: { s: this.$searchText.val() }
    //what to do on success
    }).done(function (data) {
      //if the search finds results, call searchResults function
      if (data.Response != "False") {
        self.searchResults(data.Search);
      } else {
        console.log("this search is invalid");
      }
    });
  },
  
  //to output the search results for a movie to the page (will return 10 titles)
  searchResults: function(results) {
    console.log(results);

    //create a new movies collection
    var movies = new ReviewMi.Collections.MovieResults();

    _.each(results, function(result) {
      // console.log(result);

      //create a new movie object and set its variables
      var movie = new ReviewMi.Models.MovieResult();
      movie.set('title',result.Title);
      movie.set('year',result.Year);
      movie.set('imdbID',result.imdbID);
      movie.set('type',result.Type);
      // console.log(movie.attributes);

      //add this movie to the movies collection
      movies.add(movie);
    });

    // console.log(movies);

    //generate a view to display search results and render this
    var view = new ReviewMi.Views.movieResultsListView({collection: movies});
    view.render();
  }
  
});