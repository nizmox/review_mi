// the page to allow the user to create a new review
ReviewMi.Views.movieSearchView = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    //unbind any existing event handlers
    // $(this.el).undelegate('#search-btn', 'click');

    this.template = _.template($('#movieSearchView').html() );
  },

  render: function () {
    this.$el.html(this.template());

    //the text box where user search terms will be entered
    this.$searchText = $('#search-text');
  },

  events: {
    "click #search-btn": "search"
  },

  search: function (event) {
    //prevent default form submit
    event.preventDefault();

    console.log(this.$searchText);

    ReviewMi.router.navigate('search/movies/' + encodeURI(this.$searchText.val()), true);
  }
  
});