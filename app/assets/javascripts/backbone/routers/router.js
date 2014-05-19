ReviewMi.Routers.appRouter = Backbone.Router.extend({
  routes: {
    //home
    '': 'home',
    //movie search
    'search/movies': 'movieSearch',
    //movie search with results
    'search/movies/:term': 'movieResultsList',
    //movie search specific title
    'search/movies/title/:imdbID': 'movieTitle',
    //new review
    'review/:id': 'newReview'
    //invalid url
    // '*anything': 'goHome'
  },

  //home page
  home: function () {
    var view = new ReviewMi.Views.homeView({collection: ReviewMi.reviews});
    view.render();
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
    var movieResults = new ReviewMi.Collections.MovieResults();

    //perform search on OMDB for the specified search term
    movieResults.searchOMDB(term, function () {
      var view = new ReviewMi.Views.movieResultsListView({collection: movieResults});
      view.render();
    });
    
  },

  // view a single movie search result with more detail
  movieTitle: function (imdbID) {

    var movie = ReviewMi.movies.where({ imdb_id: imdbID })[0];

    var render = function (movie) {
      var view = new ReviewMi.Views.movieTitleView({model: movie});
      view.render(); 
    };
    
    //if movie does not already exist
    if ( !movie ) {
      //perform search on omdb for this movie
      movie = this.fetchMovie(imdbID, render);

    //movie already exists in movies collection, just render the view
    } else {
      console.log('this movie already exists in movies collection, no search needed');
      render(movie);
    }

  },

  //create a new review page (for content)
  newReview: function (id) {
    //find the content model associated with this route
    var model = ReviewMi.contents.get(id);
    
    var view = new ReviewMi.Views.newReview({model: model});
    view.render();
  },
  
  // goHome: function () {
  //   document.location.hash = '';
  // },

  //-------------------------------
  // HELPER FUNCTIONS (NOT ROUTES)
  //-------------------------------

  fetchMovie: function(imdbID) {
    console.log('this is a new movie, searching omdb...');

    var request = $.ajax({
      type: 'GET',
      dataType: 'json',
      url: '/movies/search/' + imdbID
      // data: { s: searchTerm }
    //what to do on success
    }).done(function (data) {

      // create a new 'content' and 'movie' and add these to the respective collections
      var content = new ReviewMi.Models.Content(data.content);
      var movie = new ReviewMi.Models.Movie(data.movie);

      ReviewMi.contents.add(content);
      ReviewMi.movies.add(movie);

      console.log('move ' + imdbID + ' has been found, ' + content.get('title') + ' has been added to the movies collection');

      //if a callback function was passed in, run this function
      if (typeof success === 'function') {
        success(movie);
      }
    });
  }
});