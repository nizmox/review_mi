ReviewMi.Views.movieResultView = Backbone.View.extend({
  tagName: 'li',
  initialize: function () {
    this.template = _.template( $('#movieResultView').html() );
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    console.log(this.$el.html());
    return this;
  },
  events: {
    "click": "titleDetails"
  },
  titleDetails: function () {
    ReviewMi.router.navigate('review/movie/' + (this.model.attributes.imdbID), true);
  }
});