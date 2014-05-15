// generates an <li> tag for a review
ReviewMi.Views.ReviewView = Backbone.View.extend({
  tagName: 'li',

  initialize: function () {
    this.template = _.template($('#reviewView').html() );
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }
});