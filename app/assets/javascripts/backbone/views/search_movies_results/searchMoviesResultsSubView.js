ReviewMi.Views.searchMoviesResultsSubView = Backbone.View.extend({
  tagName: 'li',
  initialize: function () {
    this.template = _.template( $('#searchMoviesResultsSub').html() );
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  events: {
    "click": "titleDetails"
  },
  titleDetails: function () {
    ReviewMi.router.navigate('movies/' + (this.model.attributes.imdbID), true);
  }
});