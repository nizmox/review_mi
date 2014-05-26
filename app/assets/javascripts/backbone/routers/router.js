ReviewMi.Routers.appRouter = Backbone.Router.extend({
  routes: {
    //home
    '': 'home',
    //movie search
    'search/movies': 'searchMovies',
    //movie search with results (using a search term - movie title)
    'search/movies/:term': 'searchMoviesTerm',
    //movie search specific title (using imdbID)
    'search/movies/title/:imdbID': 'movieTitle',
    //new review (using content id)
    'review/new/:id': 'newReview',
    //view a review (using review id)
    'review/:id': 'showReview',
    //signup for an account
    'users/signup': 'newUser'
    //invalid url
    // '*anything': 'goHome'
  },

  //home page
  home: function () {
    var view = new ReviewMi.Views.homeView({collection: ReviewMi.reviews});
    view.render();
  },

  //page to search for a movie to then review
  searchMovies: function () {
    var view = new ReviewMi.Views.searchMoviesView();
    view.render();
  },

  //movie search results page
  searchMoviesTerm: function (term) {
    //render movieSearch so the 'results container is on the page'
    this.searchMovies();

    //create a movies collection and search for specified title
    var movieResults = new ReviewMi.Collections.MovieResults();

    //perform search on OMDB for the specified search term
    movieResults.searchOMDB(term, function () {
      var view = new ReviewMi.Views.searchMoviesTermView({collection: movieResults});
      view.render();
    });
    
  },

  // view a single movie search result with more detail
  movieTitle: function (imdbID) {

    var movie = ReviewMi.movies.where({ imdb_id: imdbID })[0];

    // to call once movie is found in collection or fetched from OMDB and saved in database
    var render = function (movie) {
      var view = new ReviewMi.Views.movieTitleView({model: movie});
      view.render(); 
    };
    
    //movie already exists in movies collection, just render the view
    if ( movie ) {
      console.log('this movie already exists in movies collection, no search needed');
      render(movie);
    //if movie does not already exist
    } else {
      //perform search on omdb for this movie
      movie = this.fetchMovie(imdbID, render);
    }

  },

  //create a new review page (for content)
  newReview: function (id) {
    //find the content model associated with this route
    var model = ReviewMi.contents.get(id);
    
    var view = new ReviewMi.Views.newReviewView({model: model});
    view.render();
  },

  showReview: function (id) {
    //find the content model associated with this route
    var model = ReviewMi.reviews.get(id);

    var view = new ReviewMi.Views.showReview({model: model});
    view.render();

    //setup rating using raty.js
    $('#stars').raty({ path: 'assets/raty', number: 10, readOnly: true, score: model.get('rating') });
  },

  newUser: function () {
    var view = new ReviewMi.Views.newUserView();
    view.render();
  },
  
  // goHome: function () {
  //   document.location.hash = '';
  // },

  //-------------------------------
  // HELPER FUNCTIONS (NOT ROUTES)
  //-------------------------------

  fetchMovie: function(imdbID, success) {
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