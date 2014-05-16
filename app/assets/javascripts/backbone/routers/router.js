ReviewMi.Routers.appRouter = Backbone.Router.extend({
  routes: {
    //home
    '': 'home',
    //movie search
    'search/movies': 'movieSearch',
    'search/movies/:term': 'movieResultsList',
    'search/movies/title/:imdbID': 'movieTitle',
    //new review
    'review/:content/:id': 'newReview'
    //invalid url
    // '*anything': 'goHome'
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
    var view = new ReviewMi.Views.movieSearchView();
    view.render();
  },

  //movie search results page
  movieResultsList: function (term) {
    //render movieSearch so the 'results container is on the page'
    this.movieSearch();

    //create a movies collection and search for specified title
    var movies = new ReviewMi.Collections.Movies();

    //perform search on OMDB for the specified search term
    movies.searchOMDB(term, function () {
      var view = new ReviewMi.Views.movieResultsListView({collection: movies});
      view.render();
    });
    
  },

  // view a single movie search result with more detail
  movieTitle: function (imdbID) {

    var movieArr = ReviewMi.movies.where({ imdb_id: imdbID });
    
    //if movie does not already exist
    if ( _.isEmpty( movieArr ) ) {
      console.log('this is a new movie, searching...');
      //create a new movie object
      movie = new ReviewMi.Models.Movie();

      //search for this movie and render view on completion
      movie.searchOMDB(imdbID, function () {
        //render the single movie view
        var view = new ReviewMi.Views.movieTitleView({model: movie});
        view.render();
      });
    //movie already exists in movies collection, just render the view
    } else {
      console.log('this movie already exists in movies collection, no search needed');
      //render the single movie view
      var view = new ReviewMi.Views.movieTitleView({model: movieArr[0]});
      view.render();  
    }

  },

  newReview: function (content, id) {
    if (content === 'movie') {
      var model = ReviewMi.movies.get(id);
    }
    var view = new ReviewMi.Views.newReview({model: model});
    view.render();
  },
  
  goHome: function () {
    document.location.hash = '';
  }
});