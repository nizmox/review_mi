//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

window.ReviewMi = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {}
};

$(document).ready(function () {
  //create and render the app view
  var view = new ReviewMi.Views.appView();
  view.render();
  //fetch all the movies in the database
  ReviewMi.movies = new ReviewMi.Collections.Movies();
  ReviewMi.movies.fetch().done(function() {
    // start the backbone router
    ReviewMi.router = new ReviewMi.Routers.appRouter();
    Backbone.history.start({pushState: false});    
  });
});

