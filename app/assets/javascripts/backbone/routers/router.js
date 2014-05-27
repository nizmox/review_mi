ReviewMi.Routers.appRouter = Backbone.Router.extend({
  routes: {
    //home
    '': 'home',
    //movie search
    'search/movies': 'searchMovies',
    //movie search with results (using a search term - movie title)
    'search/movies/results/:term': 'searchMoviesResults',
    //movie search specific title (using imdbID)
    'movies/:imdbID': 'movies',
    //new review (using content id)
    'review/new/:contentid': 'reviewNew',
    //view a review (using review id)
    'review/:id': 'review',
    //signup for an account
    'users/signup': 'usersSignup'
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
  searchMoviesResults: function (term) {
    //render movieSearch so the 'results container is on the page'
    this.searchMovies();

    //create a movies collection and search for specified title
    var movieResults = new ReviewMi.Collections.MovieResults();

    //perform search on OMDB for the specified search term
    movieResults.searchOMDB(term, function () {
      var view = new ReviewMi.Views.searchMoviesResultsView({collection: movieResults});
      view.render();
    });
    
  },

  // view a single movie search result with more detail
  movies: function (imdbID) {

    //query the movies collection for the desired movie using imdbID
    var movie = ReviewMi.movies.where({ imdb_id: imdbID })[0];

    //callback for once movie is found (either in the collection or once fetched from OMDB)
    var render = function (movie) {
      var view = new ReviewMi.Views.moviesView({model: movie});
      view.render(); 
    };
    
    //movie already exists in movies collection, just render the view
    if ( movie ) {
      console.log('this movie already exists in movies collection, no search needed');
      render(movie);
    //if movie does not already exist
    } else {
      console.log('this is a new movie, searching OMDB...');
      //perform search on omdb for this movie
      movie = this.fetchMovie(imdbID, render);
    }

  },

  //create a new review page (for content)
  reviewNew: function (contentId) {
    //find the content model associated with this route
    var model = ReviewMi.contents.get(contentId);
    
    var view = new ReviewMi.Views.reviewNewView({model: model});
    view.render();
  },

  review: function (id) {
    //find the content model associated with this route
    var model = ReviewMi.reviews.get(id);

    var view = new ReviewMi.Views.reviewView({model: model});
    view.render();

    //setup rating using raty.js
    $('#stars').raty({ path: 'assets/raty', number: 10, readOnly: true, score: model.get('rating') });
  },

  usersSignup: function () {
    var view = new ReviewMi.Views.usersSignupView();
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