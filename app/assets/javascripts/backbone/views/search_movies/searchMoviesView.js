// the page to allow the user to create a new review
ReviewMi.Views.searchMoviesView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    //unbind any existing event handlers
    $(this.el).undelegate('#search-movies-frm', 'submit');

    //fetch html template
    this.template = _.template($('#searchMovies').html() );
  },

  render: function () {
    this.$el.html(this.template());

    //the text box where user search terms will be entered
    this.$searchText = $('#search-text');
  },

  events: {
    "submit #search-movies-frm": "search"
  },

  search: function (event) {
    //prevent default form submit
    event.preventDefault();

    console.log('searching for: ',this.$searchText.val());

    ReviewMi.router.navigate('search/movies/results/' + encodeURI(this.$searchText.val()), true);
  }
  
});