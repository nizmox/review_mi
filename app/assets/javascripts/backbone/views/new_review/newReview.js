ReviewMi.Views.newReview = Backbone.View.extend({
  el: '#main',

  initialize: function () {
    this.template = _.template($('#newReview').html() );
  },

  render: function () {
    this.$el.html( this.template( this.model.toJSON() ) );
  }
});