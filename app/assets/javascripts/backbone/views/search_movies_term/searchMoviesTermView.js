ReviewMi.Views.searchMoviesTermView = Backbone.View.extend({
  
  tagName: 'ul',
  className: 'movies-list',

  initialize: function (options) {
    // store the location to output the ul to
    this.$result = $('#result');

  },

  render: function () {
    //append to #results
    this.$result.html(this.el);

    this.collection.each(function(result){
      var view = new ReviewMi.Views.searchMoviesTermSubView({model: result});
      $('.movies-list').append(view.render().el);
    });
  }
});