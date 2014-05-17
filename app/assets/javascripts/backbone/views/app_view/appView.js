ReviewMi.Views.appView = Backbone.View.extend({
  el: '#app',

  initialize: function () {
    this.template = _.template($('#appView').html() );
  },

  render: function () {
    this.$el.html( this.template() );

    if (ReviewMi.currentUser) {
      var view = new ReviewMi.Views.loggedInView();
      view.render();
    } else {
      var view = new ReviewMi.Views.loggedOutView();
      view.render();
    }
  }
});