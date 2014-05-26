ReviewMi.Views.searchMoviesTermSubView = Backbone.View.extend({
  tagName: 'li',
  initialize: function () {
    this.template = _.template( $('#search-movies-term-sub').html() );
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