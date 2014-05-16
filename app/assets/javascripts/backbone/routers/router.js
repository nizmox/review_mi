ReviewMi.Routers.appRouter = Backbone.Router.extend({
  routes: {
    //home
    '': 'home',
    //movie search
    'search/movies': 'movieSearch',
    'search/movies/:term': 'movieResultsList',
    'search/movies/title/:imdbID': 'movieTitle',
    //invalid url
    '*anything': 'goHome'
  },

  //home page
  home: function () {
    ReviewMi.reviews = new ReviewMi.Collections.Reviews();
    ReviewMi.reviews.fetch().done(function(results) {
      //render a view for each review
      var view = new ReviewMi.Views.homeView({collection: ReviewMi.reviews});
      view.render();
    });
  },

  //page to search for a movie to then review
  movieSearch: function () {
    ReviewMi.movieSearchView = new ReviewMi.Views.movieSearchView();
    ReviewMi.movieSearchView.render();
  },

  //movie search results page
  movieResultsList: function (term) {
    //render movieSearch so the 'results container is on the page'
    this.movieSearch();

    //create a movies collection and search for specified title
    var movies = new ReviewMi.Collections.Movies();

    //perform search on OMDB for the specified search term
    movies.searchOMDB(term, function () {
      console.log("callback occuring...");
      ReviewMi.movieResultsListView = new ReviewMi.Views.movieResultsListView({collection: movies});
      ReviewMi.movieResultsListView.render();
    });
    
  },

  // view a single movie search result with more detail
  movieTitle: function (imdbID) {

    var movie = new ReviewMi.Models.Movie();
    movie.searchOMDB(imdbID, function () {
      console.log("callback occuring...");
      var view = new ReviewMi.Views.movieTitleView({model: movie});
      view.render();
    });

  },
  
  goHome: function () {
    document.location.hash = '';
  }
});