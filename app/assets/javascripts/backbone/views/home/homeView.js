// the sites homepage, lists recent reviews from the users friends
ReviewMi.Views.homeView = Backbone.View.extend({
  el: '#main',

  initialize : function () {
    this.template = _.template($('#homeView').html() );
  },

  render : function () {
    this.$el.html(this.template());

    //loop through each review (collection), generate the view, render and append to the page
    this.collection.each(function(review) {
      //render a snippet of each movie review
      var view = new ReviewMi.Views.homeSubView({model: review});
      $('#reviews').append(view.render().el);
    });
  }
});